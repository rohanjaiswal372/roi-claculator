import React, { useState } from 'react'
import { FINANCIAL_USER_INPUTS, AVERAGE_REIMBURSEMENT } from '@/app/resource'

type FinancialUserInputsProps = {
  onSubmitFinancialUserInputs: (APR: number, ARCS?: number) => void;
  cardData: any;
  marcs: number
};

interface FormValues {
  MC: number;
  MCI: number;
  C: number;
  CRMC: number;
  GBP: number;
  VSG: number;
  DS: number;
  AGB: number;
}

const financialUserCard = ({ onSubmitFinancialUserInputs, cardData, marcs }: FinancialUserInputsProps) => {
  const [useCustomFinancialData, setUseCustomFinancialData] = useState<Boolean>(false)
  const [formData, setFormData] = useState<any>()
  const handleSubmit = (key: string) => {
    if (key === 'MAPTR') {
      const APR = cardData.patientSurgeryData.EMS * marcs;
      onSubmitFinancialUserInputs(APR)
    }
    if (key === 'CFPTR') {
      setUseCustomFinancialData(true)
    }
  }

  const handleSubmitPayersCaseMix = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    const formValues: FormValues = {
      MC: parseFloat(formData.get('MC') as string) / 100,
      MCI: parseFloat(formData.get('MCI') as string) / 100,
      C: parseFloat(formData.get('C') as string) / 100,
      CRMC: parseFloat(formData.get('CRMC') as string) / 100,
      GBP: parseFloat(formData.get('GBP') as string) / 100,
      VSG: parseFloat(formData.get('VSG') as string) / 100,
      DS: parseFloat(formData.get('DS') as string) / 100,
      AGB: parseFloat(formData.get('AGB') as string) / 100,
    };
    setFormData(formValues);

    //calculate the avg medicare reimbursement based on procedure mix (Mr%ofprocedures):
    //[(MrGBPx%gbp)+ (MrVSSGx%vsg)+(MrAGBx%AGB)+ (MrDSx%DS)]+ MrEGD + MrConsult = Mr%ofprocedures
    const MRProcedures = (AVERAGE_REIMBURSEMENT.MrGBP * formValues.GBP) +
      (AVERAGE_REIMBURSEMENT.MrVSG * formValues.VSG) +
      (AVERAGE_REIMBURSEMENT.MrAGB * formValues.AGB) +
      (AVERAGE_REIMBURSEMENT.MrDS * formValues.DS) + AVERAGE_REIMBURSEMENT.MrEGD + AVERAGE_REIMBURSEMENT.MrConsult
      
    //1. Commerical average reimbursement for a completed surgery (Carcs):    Carcs = Mr%ofprocedures x CR%MC
    const CARCS = MRProcedures * formValues.CRMC
    //2. Medicare average reimbursement for a completed surgery adjusted (Marcsa)   Marcsa =  Mr%ofprocedures x MC%
    const MARCSA = MRProcedures * formValues.MC
    //3. Medicaid average Reimbursement for a completed surgery:  (MCIarcs)   MCIarcs = (Mr%ofprocedures x .8) x MCI%
    const MCIARCS = MRProcedures * 0.8 * formValues.MCI

    //the final Arcs calculation will then take into consideration the payor mix
    const ARCS = (CARCS * formValues.C) + (MARCSA * formValues.MC) + (MCIARCS * formValues.MCI) / 3

    //calculate the actural practice reimbursement (APR)  
    const APR = cardData.patientSurgeryData.EMS * ARCS;
    onSubmitFinancialUserInputs(APR, ARCS)
  };

  return (
    <div>
      {useCustomFinancialData &&
        <div>
          <h1 className="text-3xl tracking-wider pb-10 pt-5 text-center text-gray-900 shadow-sm">Payers and Case Mix</h1>
          <form onSubmit={handleSubmitPayersCaseMix}>
            {/* Grid 1 */}
            <div className="grid grid-cols-6 gap-4 pt-10">
              <div className="grid col-span-3 lg:col-span-2">
                <div className="place-content-center ">
                  <div className="card bg-[#FEF1F0] border-2 border-[#f1e5e4]  text-black">
                    <div className="card-body items-center text-center">
                      <p className="card-title text-sm text-semibold">What is your Practice Payer Mix  by percentage?</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid col-span-3 lg:col-span-3 gap-4">
                <div className="place-content-center">
                  <input required
                    type="number"
                    name="MC"
                    id="10"
                    placeholder="Medicare = MC%"
                    className="bg-gray-50 block w-full rounded-xl border-0 px-3 py-1.5 
                  h-14 shadow-sm ring-1 ring-inset ring-gray-300
                  placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                  focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="place-content-center">
                  <input required
                    type="number"
                    name="MCI"
                    id="10"
                    placeholder="Medicaid = MCI%"
                    className="bg-gray-50 block w-full rounded-xl border-0 px-3 py-1.5 
                  h-14 shadow-sm ring-1 ring-inset ring-gray-300
                  placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                  focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="place-content-center">
                  <input required
                    type="number"
                    name="C"
                    id="10"
                    placeholder="Commercial = C%"
                    className="bg-gray-50 block w-full rounded-xl border-0 px-3 py-1.5 
                  h-14 shadow-sm ring-1 ring-inset ring-gray-300
                  placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                  focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className='hidden lg:block grid col-span-1'></div>
            </div>
            {/* Grid 2 */}
            <div className="grid grid-cols-6 gap-4 py-10">
              <div className="grid col-span-3 lg:col-span-2">
                <div className="place-content-center ">
                  <div className="card bg-[#FEF1F0] border-2 border-[#f1e5e4]  text-black">
                    <div className="card-body items-center text-center">
                      <p className="card-title text-sm text-semibold">What is your commerical reimbursement as a % of Medicare (CR%MC) (EG:  our contracts are generally 125% of medicare)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid col-span-3">
                <div className="place-content-center">
                  <input required
                    type="number"
                    name="CRMC"
                    id="10"
                    placeholder="Commerical reimpursemnt as a % of Medicare = CR%MC"
                    className="bg-gray-50 block w-full rounded-xl border-0 px-3 py-1.5 
                  h-14 shadow-sm ring-1 ring-inset ring-gray-300
                  placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                  focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className='hidden lg:block grid col-span-1'>
                <div className="h-56 grid gap-4 place-content-center">
                  <div className="grid gap-8 place-content-center">
                    <div className=' content-center' >
                      <button

                        className="rounded-full bg-[#dc5a57] hover:bg-[#ffa81f] px-10 py-3 text-sm font-semibold text-white shadow-sm"
                      >
                        submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Grid 3 */}
            <div className="grid grid-cols-6 gap-4">
              <div className="grid col-span-3 lg:col-span-2">
                <div className="place-content-center ">
                  <div className="card bg-[#FEF1F0] border-2 border-[#f1e5e4]  text-black">
                    <div className="card-body items-center text-center">
                      <p className="card-title text-sm text-semibold">What is your case mix of procedures?</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid col-span-3 gap-4">
                <div className="place-content-center">
                  <input required
                    type="number"
                    name="GBP"
                    id="10"
                    placeholder="Percent Gastric Bypass:  %GBP"
                    className="bg-gray-50 block w-full rounded-xl border-0 px-3 py-1.5 
                  h-14 shadow-sm ring-1 ring-inset ring-gray-300
                  placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                  focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="place-content-center">
                  <input required
                    type="number"
                    name="VSG"
                    id="10"
                    placeholder="Percent Sleeve: %VSG"
                    className="bg-gray-50 block w-full rounded-xl border-0 px-3 py-1.5 
                  h-14 shadow-sm ring-1 ring-inset ring-gray-300
                  placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                  focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="place-content-center">
                  <input required
                    type="number"
                    name="DS"
                    id="10"
                    placeholder="Percent DS or SADI:  %DS"
                    className="bg-gray-50 block w-full rounded-xl border-0 px-3 py-1.5 
                  h-14 shadow-sm ring-1 ring-inset ring-gray-300
                  placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                  focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="place-content-center">
                  <input required
                    type="number"
                    name="AGB"
                    id="10"
                    placeholder="Percent Band: %AGB"
                    className="bg-gray-50 block w-full rounded-xl border-0 px-3 py-1.5 
                  h-14 shadow-sm ring-1 ring-inset ring-gray-300
                  placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                  focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className='hidden lg:block grid col-span-1'></div>
            </div>
            {/* xs: sm: lg:hidden */}
            <div className="lg:hidden grid content-middle place-items-center py-10">
              <div className='' >
                <button

                  className="rounded-full bg-[#dc5a57] hover:bg-[#ffa81f] px-10 py-3 text-sm font-semibold text-white shadow-sm"
                >
                  submit
                </button>
              </div>
            </div>

          </form>
        </div>}
      {!useCustomFinancialData &&
        <div>
          <h1 className="xs:text-md md:text-1xl lg:text-3xl tracking-wider pb-10 pt-5 text-center text-gray-900 shadow-sm">Financial User Inputs</h1>
          <div className="grid grid-rows lg:grid-flow-col">
            <div>
              <div className="h-56 grid gap-4 place-content-center ">
                <div className="card bg-[#54c45e] text-gray-900">
                  <div className="card-body items-center text-center">
                    <h2 className="font-bold">Display the Calculation (EMS / ENP = cPTR)</h2>
                    <p className='card-title'>{cardData.patientSurgeryData.CPTR}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row-span-3 lg:col-span-2">
              <div className="space-y-12">
                <div className="px-12 py-4">
                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="col-span-full">
                      <div className="card bg-[#FEF1F0] border-2 border-[#f1e5e4] text-black">
                        <div className="card-body items-center text-center">
                          <p className="card-title text-sm text-semibold">{FINANCIAL_USER_INPUTS.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="h-56 grid gap-4 place-content-center">
                <div className="grid gap-8 place-content-center">
                  {FINANCIAL_USER_INPUTS.options.map(option =>
                    <div className='w-96 content-center' key={option.id}>
                      <button
                        onClick={() => handleSubmit(option.key)}
                        className="rounded-full bg-[#dc5a57] hover:bg-[#ffa81f] px-10 py-3 text-sm font-semibold text-white shadow-sm"
                      >
                        {option.description}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>}
    </div>
  )
}

export default financialUserCard;
