import React from 'react'

function block() {
  const array = ['A', 'B', 'C', 'D', 'E', 'F', 'G']

  return (
    <div className="grid grid-flow-col auto-cols-fr h-screen w-full">
      <div className="grid grid-cols-3  overflow-hidden">
        {array.map((el, idx) =>
          <div key={idx} className="bg-[#f2f2f2] card h-5/6 w-36 text-neutral-content">
            <div className="card-body items-center text-center">
              <h2 className="card-title text-[#437073] text-sm md:text-base">Bariatric Surgery Estimate</h2>
            </div>
          </div>
        )}
        {array.map((el, idx) =>
          <div key={idx} className="card h-5/6 w-36 bg-[#f2f2f2] text-neutral-content">
            <div className="card-body items-center text-center">
              <h2 className="card-title text-[#437073] text-sm md:text-base">Bariatric Surgery Estimate</h2>
            </div>
          </div>
        )}
      </div>

      <div className="col-span-2 overflow-hidden">
        <div className='pl-[90%]'>
          <button className="btn btn-circle btn-outline right-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        <div className='p-14 border-l-2 border-[#979797]'>
          <div className="grid grid-cols-2 gap-2">

          <div className="card max-w-sm shadow-2xl bg-white text-black">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">Average Monthly New Patient Visits</span>
                  </label>
                  <input type="text" placeholder="AvMNPVs" className="bg-[#e5e6e6] input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">Average Monthly Bariatric Surgeries</span>
                  </label>
                  <input type="text" placeholder="AvMBSs" className="bg-[#e5e6e6] input input-bordered" required />
                </div>
                <div className="flex items-center justify-center form-control mt-6">
                  <button className="rounded-full py-3 px-8 bg-[#dc5a57] hover:bg-[#a8302e] text-white ">Pull Through Rate (PTR)</button>
                </div>
              </form>
            </div>

            <div className="card max-w-sm shadow-2xl bg-white text-black">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">Percentage or Number Increase in New Patient Visits</span>
                  </label>
                  <input type="email" placeholder="New Patient Visits" className="bg-[#e5e6e6] input input-bordered" required />
                </div>
                <div className="flex items-center justify-center form-control mt-6">
                  <button className="rounded-full py-3 px-8 bg-[#dc5a57] hover:bg-[#a8302e] text-white ">Additional Monthly New Patient Visits (AdMNPVs)</button>
                </div>
              </form>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default block
