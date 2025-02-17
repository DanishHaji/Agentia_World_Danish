import React from 'react';
import { LuBot } from "react-icons/lu"

const Navbar = () => {
  return (
    <nav className='bg-black text-white flex justify-between items-center p-4'>
        <div className='flex items-center space-x-2'>
        <LuBot size={34} className='text-purple-600' />
        <span className='text-xl font-bold'>Agentia World</span>
        </div>
    </nav>
  )
}

export default Navbar
