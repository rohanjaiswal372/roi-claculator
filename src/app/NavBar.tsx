import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { CiCalculator2 } from 'react-icons/ci';


function navbar() {
  const links = [
    { label: 'We make navigating your weight loss journey easy', href: '/' }
  ]
  return (
    <nav className='flex border-b'>
      <div className='flex flex-row w-3/4 space-x-14 m-auto my-3 h-14 items-center'>
        <Link href='/' className='basis-1/3 flex space-x-2 items-center'>
          <Image
            src="/bariatricLogo.png"
            width={190}
            height={45}
            alt="Screenshots of the dashboard project showing desktop version"
            className="hidden md:block object-contain"
          />
        </Link>
        <ul className='basis-1/2 flex space-x-6'>
          {links.map((link, idx) =>
            <li key={idx}>
              <Link className='text-zinc-500 hover:text-zinc-800 transition-colors' href={link.href}>{link.label}</Link></li>
          )}

        </ul>

      </div>
    </nav>
  )
}

export default navbar
