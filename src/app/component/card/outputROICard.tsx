
type OutputROICardProps = {
  redoROI: () => void;
  cardData: any
};

const OutputROICard = ({ cardData, redoROI }: OutputROICardProps) => {
  const handlePrint = () => {
    window.print();
  }
  return (
    <div className='min-w-full'>
      <h1 className="lg:text-3xl tracking-wider pb-10 pt-5 text-center text-gray-900 shadow-sm">ROI Output</h1>
      <div className="grid lg:grid-rows-2 lg:grid-cols-3 lg:mx-10">
        <div>
          <div className="grid place-content-center pt-10">
            <div className="card bg-[#FEF1F0] border-2 border-[#f1e5e4] text-gray-900">
              <div className="card-body items-center text-center">
                <p>{cardData.ROIData.description}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="grid gap-10 place-content-center pt-14">
            {cardData.ROIData.setA.map((el: any, idx: any) =>
              <div className="card bg-[#54c45e] text-gray-900" key={idx}>
                <div className="card-body items-center text-center px-10 py-6">
                  <p>{el.key}: {el.value.toFixed(2)}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div>
          <div className="grid gap-10 place-content-center pt-14">
            {cardData.ROIData.setB.map((el: any, idx: any) =>
              <div className="card bg-[#54c45e] text-gray-900" key={idx}>
                <div className="card-body items-center text-center px-10 py-6">
                  <p>{el.key}: {el.value.toFixed(2)} </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className=' mt-10'>
          {cardData.ROIData.setC.map((c: any, idx: any) =>
            <div className="grid grid-cols-2 place-content-center" key={idx}>
              {c.map((el: any, i: any) =>
                <div className="card bg-[#54c45e] text-gray-900 my-2 mx-2" key={i}>
                  <div className="card-body items-center text-center px-14 py-4">
                    <p>{el.key}: {el.value}</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <div className='col-span-2 mt-10'>
          <form className="grid grid-rows-1 grid-cols-2">
            <div className="grid place-content-center py-2">
              <div>
                <button
                  type="submit"
                  onClick={redoROI}
                  className="tracking-wide rounded-full bg-[#dc5a57] hover:bg-[#ffa81f] w-72 py-8 text-sm font-semibold text-white shadow-sm"
                >
                  Redo Calculations
                </button>
              </div>
            </div>
            <div className="grid place-content-center py-2">
              <div>
                <button
                  type="button"
                  onClick={handlePrint}
                  className="tracking-wide rounded-full bg-[#dc5a57] hover:bg-[#ffa81f] min-w-72 py-8 text-sm font-semibold text-white shadow-sm"
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

export default OutputROICard
