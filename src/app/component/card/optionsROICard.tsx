import React from 'react'

type OptionsROIcalculations = {
  onSubmitROIOption: (dataType: number) => void;
  roiOptions: any;
};

const optionsROICard = ({ onSubmitROIOption, roiOptions }: OptionsROIcalculations) => {
  return (
    <div >
      <h1 className="lg:text-3xl tracking-wider pb-10 pt-5 text-center text-gray-900 shadow-sm">How Do you Want to Perform the ROI calculations ? </h1>
      <form className="grid lg:grid-cols-2">
        <div className='grid lg:grid-rows-3'>
          <div className="row-start-2 px-12 py-5 place-content-center">
            <div className="card bg-[#FEF1F0] border-2 border-[#f1e5e4]  text-black">
              <div className="card-body items-center">
                <p>How Would you like to perform your ROI Calculations?</p>
              </div>
            </div>
          </div>
        </div>
        <div className='lg:py-10'>
          <div className="grid gap-8 place-content-center">
            {roiOptions ? roiOptions.options.map((option: any) => (
              <div className='content-center' key={option.id}>
                <button
                  type="submit"
                  onClick={() => { onSubmitROIOption(option.key) }}
                  className="w-96 rounded-full bg-[#dc5a57] hover:bg-[#ffa81f] px-10 py-5 text-white shadow-xl"
                >
                  {option.description}
                </button>
              </div>
            )) : ''}
          </div>
        </div>
      </form>
    </div>
  )
}

export default optionsROICard
