'use client'
import React from 'react'

interface ToggleProps {
  close: () => void,
  resourceData: {
    title: string,
    input: [
      {
        name: string,
        abbreviation: string,
        type: string,
      }
    ],
    estimate: [
      {
        name: string,
        abbreviation: string,
        formula: () => string,
      }
    ]
  }
}

function estimate({ close, resourceData }: ToggleProps) {

  return (
    <div className="col-span-2 overflow-hidden">
      <div className='pl-[90%]'>
        <button className="btn btn-circle btn-outline right-0" onClick={close}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>
      <div className='p-14 border-l-2 border-[#979797]'>

        <div className="card shadow-2xl bg-white text-black">
          <form className="card-body">
            <div className="grid grid-flow-col auto-cols-fr gap-10 w-full">
              <div className="form-control gap-4">
                {resourceData.input.map((el) => 
                (
                  <div className='w-full'>
                  <label className="label">
                    <span className="label-text text-black">{el.name}</span>
                  </label>
                  <input type="text" placeholder={el.abbreviation} className="bg-[#e5e6e6] input input-bordered w-full" required />
                </div>
                )                
                )}
              </div>
              <div className="form-control gap-4">
                {resourceData.estimate.map((el) => 
                (
                  <div className='w-full'>
                  <label className="label">
                    <span className="label-text text-black">{el.name}</span>
                  </label>
                  <input type="text" placeholder={el.abbreviation} className="bg-[#e5e6e6] input input-bordered w-full" required />
                </div>
                )                
                )}
              </div>
            </div>


            <div className="flex items-center justify-center form-control mt-6">
              <button className="rounded-full py-3 px-8 bg-[#dc5a57] hover:bg-[#a8302e] text-white ">Pull Through Rate (PTR)</button>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}

export default estimate
