import React from 'react'

const formC = () => {
  return (
    <div >
      <h1 className="p-10 text-center font-semibold leading-7 text-gray-900">How Do you Want to Perform the ROI calculations ? </h1>

      <form className="grid grid-cols-3">
        <div className='grid grid-rows-3'>
          <div className="row-start-2 px-12 py-5">
            <div className="card bg-[#FEF1F0] border-2 border-black  text-black">
              <div className=" card-body items-center text-center">
                <p className="card-title text-sm text-semibold">How Would you like to perform your ROI Calculations?</p>
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-2 my-10 py-10'>
          <div className="grid gap-8 place-content-center border-l border-gray-900/10">
            <div className='w-96 content-center'>
              <button
                type="submit"
                className="rounded-full bg-[#dc5a57] px-10 py-3 text-sm font-semibold text-white shadow-sm"
              >
                based a certain number increase/mon for new patient consults (#INP)
              </button>
            </div>
            <div className='w-96 content-center'>
              <button
                type="submit"
                className="rounded-full bg-[#dc5a57] px-10 py-3 text-sm font-semibold text-white shadow-sm"
              >
                based a certain number increase/mon of completed surgeries? (#ISurg)
              </button>
            </div>
            <div className='w-96 content-center'>
              <button
                type="submit"
                className="rounded-full bg-[#dc5a57] px-10 py-3 text-sm font-semibold text-white shadow-sm"
              >
                based % increase in pull through rate (%IPTR)?
              </button>
            </div>
            <div className='w-96 content-center'>
              <button
                type="submit"
                className="rounded-full bg-[#dc5a57] px-10 py-3 text-sm font-semibold text-white shadow-sm"
              >
                based a certain number increase/mon for new patients consults (#INP) and completed surgeries (#ISurg)?

              </button>
            </div>
            <div className='w-96 content-center'>
              <button
                type="submit"
                className="rounded-full bg-[#dc5a57] px-10 py-3 text-sm font-semibold text-white shadow-sm"
              >
                based a certain number increase/mon for new patients consults (#INP) and % increase in pull through rate (%IPTR)?
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default formC
