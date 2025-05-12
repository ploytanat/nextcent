
'use client'
import Logo from '@/assets/img/logo-black.png'
import { FaBars } from 'react-icons/fa';
import Image from 'next/image';
import { useState } from 'react';
export default function Navbar() {
  const [toggle, setToggle] = useState(false)
  const updateToggle = () => {
    setToggle(!toggle)
    console.log(toggle)
  }
  return (

<nav className='bg-[#F5F7FA] text-black'>
    <div className='container mx-auto max-w-[1320px]  relative h-auto p-10 flex flex-col md:flex-row md:justify-between md:items-center '>
      <div className=''>
        <a href='#'>
            <Image src={Logo} alt='' />
        </a>
      </div>

      <ul className={`${!toggle ? 'hidden' : 'flex'}  flex-col my-5 md:flex-row md:flex`}>
        <li className='my-2 mx-4'><a href='#'>Home</a></li>
        <li className='my-2 mx-4'><a href='#'>Service</a></li>
        <li className='my-2 mx-4'><a href='#'>Feature</a></li>
        <li className='my-2 mx-4'><a href='#'>Product</a></li>
        <li className='my-2 mx-4'><a href='#'>Testimonial</a></li>
        <li className='my-2 mx-4'><a href='#'>FAQ</a></li>
      </ul>

       <ul className={`${!toggle ? 'hidden' : 'flex'}  flex-col my-5 md:flex-row md:flex`}>
        <li><a  className='inline-flex  py-2 px-4  text-[#4CAF4F]' href='#'>Log in</a></li>
        <li ><a className='inline-flex  py-2 px-4 bg-[#4CAF4F] text-white rounded-[6px]' href='#'>Sign up</a></li>
      </ul>

    <FaBars onClick={updateToggle} className='absolute right-5 cursor-pointer md:hidden' />

    </div>
</nav>
  );
}
