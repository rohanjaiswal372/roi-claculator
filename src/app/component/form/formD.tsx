import React from 'react'

const formD = () => {
  return (
    <div >
      <h1 className="p-10 text-center font-semibold leading-7 text-gray-900">What If?</h1>

      <form className="grid grid-rows grid-flow-col gap-4">
        <div className="row-span-3 col-span-2">
          <div className="space-y-12">
            <div className="pr-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-full">
                  <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-600">
                    What if you increased the number of  new patient consults per month by this amount?
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
                <div className="col-start-end col-end-7">
                  <div className=''>
                    <button
                      type="submit"
                      className="rounded-full bg-[#dc5a57] px-10 py-3 text-sm font-semibold text-white shadow-sm"
                    >
                      Calculate
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default formD
