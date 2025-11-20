'use client'  

import React, { useState } from 'react'
import Link from 'next/link'
import { HiMenu, HiX } from 'react-icons/hi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='bg-purple-700 text-white px-4 py-3 flex justify-between items-center'>
      
      <div className='flex items-center gap-2'>
        <div className='bg-white text-purple-700 font-bold px-2 py-1 rounded'>B</div>
        <Link href="/" className='font-bold text-2xl'>BitLinks</Link>
      </div>

      
      <ul className='hidden md:flex gap-4 items-center'>
        <Link href="/"><li className='hover:text-gray-300'>Home</li></Link>
        <Link href="/about"><li className='hover:text-gray-300'>About</li></Link>
        <Link href="/shorten"><li className='hover:text-gray-300'>Shorten</li></Link>
        <Link href="/contact"><li className='hover:text-gray-300'>Contact Us</li></Link>
        <li className='flex gap-2'>
          <Link href="/shorten">
            <button className='bg-purple-500 rounded-lg shadow-lg px-3 py-1 font-bold'>Try Now</button>
          </Link>
          <Link href="/github">
            <button className='bg-purple-500 rounded-lg shadow-lg px-3 py-1 font-bold'>GitHub</button>
          </Link>
        </li>
      </ul>

      
      <div className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
      </div>

      
      {isOpen && (
        <ul className='absolute top-16 left-0 w-full bg-purple-700 flex flex-col gap-3 p-4 md:hidden z-10'>
          <Link href="/"><li className='hover:text-gray-300' onClick={() => setIsOpen(false)}>Home</li></Link>
          <Link href="/about"><li className='hover:text-gray-300' onClick={() => setIsOpen(false)}>About</li></Link>
          <Link href="/shorten"><li className='hover:text-gray-300' onClick={() => setIsOpen(false)}>Shorten</li></Link>
          <Link href="/contact"><li className='hover:text-gray-300' onClick={() => setIsOpen(false)}>Contact Us</li></Link>
          <Link href="/shorten">
            <li onClick={() => setIsOpen(false)}>
              <button className='w-full bg-purple-500 rounded-lg shadow-lg px-3 py-2 font-bold'>Try Now</button>
            </li>
          </Link>
          <Link href="/github">
            <li onClick={() => setIsOpen(false)}>
              <button className='w-full bg-purple-500 rounded-lg shadow-lg px-3 py-2 font-bold'>GitHub</button>
            </li>
          </Link>
        </ul>
      )}
    </nav>
  )
}

export default Navbar
