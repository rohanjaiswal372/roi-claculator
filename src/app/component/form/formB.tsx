import React from 'react'

const formB = () => {
  return (
    <div >
      <h1 className="p-10 text-center font-semibold leading-7 text-gray-900">Financial User Inputs</h1>

      <form className="grid grid-rows grid-flow-col gap-4">
        <div>
          <div className="h-56 grid gap-4 place-content-center ">
            <div className="card bg-[#54c45e] text-gray-900">
              <div className=" card-body items-center text-center">
                <h2 className="card-title">Display the Calculation</h2>
                <p>EMS/ENP = cPTR</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row-span-3 col-span-2">
          <div className="space-y-12">
            <div className="border-r border-l border-gray-900/10 pr-12 pl-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-full">
                  <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-600">
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
                  </div>
                </div>
                <div className="col-span-full">
                  <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-600">
                    What is your Estimated number of monthly Completed Surgeries?
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="street-address"
                      id="street-address"
                      autoComplete="street-address"
                      className="bg-gray-50 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="h-56 grid gap-4 place-content-center">
            <div>
              <button
                type="submit"
                className="rounded-full bg-[#dc5a57] px-10 py-3 text-sm font-semibold text-white shadow-sm"
              >
                Calculate
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default formB
