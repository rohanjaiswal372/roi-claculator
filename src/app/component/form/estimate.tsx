'use client'
import React, { useEffect, useState } from 'react'

interface ToggleProps {
  close: () => void,
  resourceData: {
    title: string,
    input: [
      {
        name: string,
        id: string,
        type: string,
      }
    ],
    estimate: [
      {
        name: string,
        id: string,
        arguments: []
        formula: () => string,
      }
    ]
  }
}

function estimate({ close, resourceData }: ToggleProps) {

  function handleSubmit(event: any) {
    event.preventDefault()

    const resp = resourceData.estimate.map((resource: any) => {
      const args = resource.arguments.map((id: any) => event.currentTarget.elements[id].value);
      const element = document.getElementById(resource.id) as HTMLInputElement;
      element.value = resource.formula(...args)
    })
  }


  return (
    <div className="col-span-2 overflow-hidden">
      <div className='pl-[90%]'>
        <button className="btn btn-circle btn-outline right-0" onClick={close}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>
      <div className='p-14 border-l-2 border-[#979797]'>

        <div className="card shadow-2xl bg-white text-black">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="grid grid-flow-col auto-cols-fr gap-10 w-full">
              <div className="form-control gap-4">
                {resourceData.input.map((el, idx) =>
                (
                  <div className='w-full' key={idx}>
                    <label className="label">
                      <span className="label-text text-black">{el.name}</span>
                    </label>
                    <input type="text" name={el.id} placeholder={el.id} className="bg-[#e5e6e6] input input-bordered w-full" required />
                  </div>
                )
                )}
              </div>
              <div className="form-control gap-4 border-l-2 border-[#979797] p-4">
                <h3 className='text-center'>Estimates</h3>
                {resourceData.estimate.map((el, idx) =>
                (
                  <div className='w-full' key={idx}>
                    <label className="label">
                      <span className="label-text text-black">{el.name}</span>
                    </label>
                    <input type="text" id={el.id} disabled placeholder={el.id} className="disabled:text-red-400 font-bold text-lg bg-[#e5e6e6] disabled:bg-[#e5e6e6] input input-bordered w-full" />
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
