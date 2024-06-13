'use client'
import React, { useState } from 'react'
import Card from '../card/card'
import Estimate from '../form/estimate'

function block() {
  const [isOpen, setIsOpen] = useState(false);
  const [resourceData, setResourceData] = useState(null)

  const closeEstimatePanel = () => {
    setResourceData(null)
    setIsOpen(false)
  }

  const updateResourceData = (resource: any) => {
    setResourceData(resource)
    setIsOpen(true)
  }

  return (
    <div className={
      `grid grid-flow-col auto-cols-fr min-h-fit max-h-full 
      ${(!isOpen && !resourceData) ? 'w-2/5' : 'w-full'}`
    }>
      <Card selectResource={updateResourceData} />
      {(isOpen && resourceData) && <Estimate close={closeEstimatePanel} resourceData={resourceData} />}
    </div>
  )
}

export default block
