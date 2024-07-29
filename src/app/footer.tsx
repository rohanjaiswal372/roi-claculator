import React from 'react'

const footer = () => {
  return (
    <div>
      <footer className="footer footer-center text-base-content py-10 bg-[#f2f2f2]">
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All right reserved by  
            <span className='text-xl text-[#27413e]'> Bariatric</span> <span className='uppercase text-[#27413e]'>center of America</span>
            </p>
        </aside>
      </footer>
    </div>
  )
}

export default footer
