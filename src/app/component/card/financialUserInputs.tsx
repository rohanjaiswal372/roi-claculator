import React from 'react'
import { FINANCIAL_USER_INPUTS } from '@/app/resource'

type FinancialUserInputsProps = {
  onSubmitFinancialUserInputs: (APR: number) => void;
  cardData: any;
  marcs: number
};

const financialUserInputs = ({ onSubmitFinancialUserInputs, cardData, marcs }: FinancialUserInputsProps) => {

  const handleSubmit = (key: string) => {
    if (key === 'MAPTR') {
      const APR = cardData.patientSurgeryData.EMS * marcs;
      onSubmitFinancialUserInputs(APR)
    }
    //todo
    if (key === 'CFPTR') {

    }
  }

  return (
    <div>
      <h1 className="p-10 text-center font-semibold leading-7 text-gray-900">Financial User Inputs</h1>

      <div className="grid grid-rows grid-flow-col gap-4">
        <div>
          <div className="h-56 grid gap-4 place-content-center ">
            <div className="card bg-[#54c45e] text-gray-900">
              <div className=" card-body items-center text-center">
                <h2 className="card-title">Display the Calculation (EMS / ENP = cPTR)</h2>
                <p>{cardData.patientSurgeryData.CPTR}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row-span-3 col-span-2">
          <div className="space-y-12">
            <div className="border-r border-l border-gray-900/10 px-12 py-4">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-full">
                  <div className="card bg-[#FEF1F0] border-2 border-black  text-black">
                    <div className=" card-body items-center text-center">
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
                    className="rounded-full bg-[#dc5a57] px-10 py-3 text-sm font-semibold text-white shadow-sm"
                  >
                    {option.description}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default financialUserInputs;
