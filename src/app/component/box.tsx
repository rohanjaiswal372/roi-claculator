'use client'
import React, { useState } from 'react'
import Breadcrumbs from './breadcrumbs'
import Accordion from './accordion'

function block() {


  return (
    <div className={'grid min-h-fit max-h-full w-full place-content-center'}>
      <Breadcrumbs />
      <div className="bg-[#F2F2F2] artboard artboard-horizontal phone-6">

      </div>
    </div>
  )
}

export default block
