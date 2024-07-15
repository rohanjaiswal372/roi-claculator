import React from 'react'

const outputROI = ({ cardData }: any) => {
  return (
    <div >
      <h1 className="p-10 text-center font-semibold leading-7 text-gray-900">ROI Output</h1>
      <div className="grid grid-rows-2 grid-cols-3 mx-10">
        <div>
          <div className="grid place-content-center ">
            <div className="card bg-[#FEF1F0] border-2 border-black text-gray-900">
              <div className="card-body items-center text-center">
                <p>{cardData.ROIData.description}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="h-56 grid gap-10 place-content-center ">
            {cardData.ROIData.setA.map((el: any, idx: any) =>
              <div className="card bg-[#54c45e] text-gray-900" key={idx}>
                <div className="card-body items-center text-center px-14 py-4">
                  <p>{el.key}: {el.value}</p>
                </div>
              </div>
            )}
          </div>
        </div>


        <div>
          <div className="h-56 grid gap-10 place-content-center ">
            {cardData.ROIData.setB.map((el: any, idx: any) =>
              <div className="card bg-[#54c45e] text-gray-900" key={idx}>
                <div className="card-body items-center text-center px-14 py-4">
                  <p>{el.key}: {el.value}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div>
          {cardData.ROIData.setC.map((c: any, idx: any) =>
            <div className="h-32 grid grid-cols-2  gap-x-10 place-content-center" key={idx}>
              {c.map((el: any, i: any) =>
                <div className="card bg-[#54c45e] text-gray-900" >
                  <div className="card-body items-center text-center px-14 py-4">
                    <p>{el.key}: {el.value}</p>
                  </div>
                </div>
              )}
            </div>
          )}

        </div>
        <div className='col-span-2'>
          <form className="grid grid-rows-1 grid-cols-2">
            <div className="grid place-content-center py-10">
              <div>
                <button
                  type="submit"
                  className="rounded-full bg-[#dc5a57] min-w-52 px-14 py-3 text-sm font-semibold text-white shadow-sm"
                >
                  Redo Calculations
                </button>
              </div>
            </div>
            <div className="grid place-content-center py-10">
              <div>
                <button
                  type="submit"
                  className="rounded-full bg-[#dc5a57] min-w-52 px-14 py-3 text-sm font-semibold text-white shadow-sm"
                >
                  Print
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default outputROI
