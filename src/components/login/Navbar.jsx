import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className='flex justify-between items-center px-9 h-[72px] border-b border-[#31343e]'>
          <Link to={'/'}>
          <img className='w-[74px] cursor-pointer' src="https://cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original" alt="" /></Link>
    </div>
  )
}
