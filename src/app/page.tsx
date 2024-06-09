
export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
              <h2 className="card-title">Cookies 1</h2>
              <p>We are using cookies for no reason.</p>
              <div className="card-actions justify-end">
                <label htmlFor="my_modal_6" className="btn">open modal</label>
              </div>
            </div>
          </div>
        </div>
      </div>


      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <div className="flex  space-x-10">
            <h3 className="flex font-bold text-lg">Hello!</h3>
              <label htmlFor="my_modal_6" className="flex font-bold text-lg">X</label>
          </div>
          <p className="py-4">This modal works with a hidden checkbox!</p>
        </div>
      </div>


    </main>
  );
}
