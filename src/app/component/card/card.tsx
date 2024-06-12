import React from 'react'
import { data } from '@/app/resource'

interface ResourceProps {
  selectResource: ({}) => void
}

function card({ selectResource }: ResourceProps) {
  return (
    <div className="grid grid-cols-3 gap-y-10">
      {data.map((el, idx) =>
        <div key={idx} onClick={() => selectResource(el)}
        className="bg-[#f2f2f2] card h-36 w-36 text-neutral-content hover:cursor-pointer">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-[#437073] text-sm md:text-base">{el.title}</h2>
          </div>
        </div>
      )}
    </div>
  )
}

export default card
