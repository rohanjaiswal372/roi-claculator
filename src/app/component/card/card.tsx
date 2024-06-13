import React from 'react'
import { data } from '@/app/resource'

interface ResourceProps {
  selectResource: ({}) => void
}

function card({ selectResource }: ResourceProps) {
  return (
    <div className="grid grid-cols-3 gap-y-10 h-fit">
      {data.map((el, idx) =>
        <div key={idx} onClick={() => selectResource(el)}
        className="bg-[#f2f2f2] card h-36 w-36 text-neutral-content hover:cursor-pointer">
          <div className="card-body items-center text-center pt-5">
            <h2 className="card-title text-[#437073] text-sm md:text-base pb-4">{el.title}</h2>
          </div>
        </div>
      )}
    </div>
  )
}

export default card
