import React from 'react'

type FinancialUserInputsProps = {
  onSubmitFinancialUserInputs: (dataType: string) => void;
  cardData: any;
};

const financialUserInputs = ({ onSubmitFinancialUserInputs, cardData }: FinancialUserInputsProps) => {
  return (
    <div >
      <h1 className="p-10 text-center font-semibold leading-7 text-gray-900">Financial User Inputs</h1>

      <div className="grid grid-rows grid-flow-col gap-4">
        <div>
          <div className="h-56 grid gap-4 place-content-center ">
            <div className="card bg-[#54c45e] text-gray-900">
              <div className=" card-body items-center text-center">
                <h2 className="card-title">Display the Calculation (EMS / ENP = cPTR)</h2>
                <p>{cardData.patientSurgeryVolumeData.CPTR}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row-span-3 col-span-2">
          <div className="space-y-12">
            <div className="border-r border-l border-gray-900/10 px-12 py-4">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-full">
                  {/* <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-600">
                    What is your Estimated number of monthly New Patient Consults?
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="street-address"
                      id="street-address"
                      autoComplete="street-address"
                      className="bg-gray-50 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div> */}

                  <div className="card bg-[#FEF1F0] border-2 border-black  text-black">
                    <div className=" card-body items-center text-center">
                      <p className="card-title text-sm text-semibold">How Would you like to perform your ROI Calculations?</p>
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
              <div className='w-96 content-center'>
                <button
                  onClick={() => { onSubmitFinancialUserInputs('medicalAvgData') }}
                  className="rounded-full bg-[#dc5a57] px-10 py-3 text-sm font-semibold text-white shadow-sm"
                >
                  Calculate Using Medicare Averages with your caculated Pull Through Rate?
                </button>
              </div>
              <div className='w-96 content-center'>
                <button
                  onClick={() => { onSubmitFinancialUserInputs('customFinancialData') }}
                  className="rounded-full bg-[#dc5a57] px-10 py-3 text-sm font-semibold text-white shadow-sm"
                >
                  Calculate Using Custsom Finanical Data with your Calculated Pull Through Rate?
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default financialUserInputs;
