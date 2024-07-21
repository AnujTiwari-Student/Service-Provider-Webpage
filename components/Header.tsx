"use client";

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import logo from '../assets/logo-bg-2 1.png'
import { Mail, Menu, Smartphone, X } from 'lucide-react'
import { useScroll } from '@/app/context/ScrollContext';

function Header() {

  const { scrollToSection } = useScroll();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen);
    }

  return (
    <div className='flex space-x-32 xl:space-x-60'>
      <div className='flex space-x-16 md:space-x-6 xl:space-x-28'>
            <div>
                <Image src={logo} alt='Logo' />
            </div>
            <div className='hidden md:flex items-center space-x-6 font-medium'>
                    <div className='hover:font-semibold cursor-pointer' onClick={() => scrollToSection('service')}>Services</div>
                    <div className='hover:font-semibold cursor-pointer' onClick={() => scrollToSection('media')}>Media</div>
                    <div className='hover:font-semibold cursor-pointer' onClick={() => scrollToSection('cases')}>Cases</div>
                    <div className='hover:font-semibold cursor-pointer' onClick={() => scrollToSection('faq')}>FAQ</div>
                    <div className='hover:font-semibold cursor-pointer' onClick={() => scrollToSection('contact')}>Contacts</div>
            </div>
      </div>
      <div className='hidden lg:flex items-center'>
        <div className='flex items-center space-x-5'>
            <div className='flex items-center space-x-2 cursor-pointer'>
                <Smartphone color='#10d513' />
                <p className='text-green-500 font-semibold text-medium'>+91 0000000000</p>
            </div>
            <div className='flex items-center space-x-2 cursor-pointer'>
                <Mail color='#10d513' />
                <p className='text-green-500 font-semibold text-medium'>demo@gmail.com</p>
            </div>
        </div>
      </div>
      <div className='md:hidden flex items-center pr-4'>
        <button onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className='absolute top-20 right-0 bg-white shadow-lg rounded-t-none rounded-lg p-4 w-full flex flex-col justify-center'>
            <div className='hover:font-semibold cursor-pointer py-2' onClick={() => scrollToSection('service')}>Services</div>
            <div className='hover:font-semibold cursor-pointer py-2' onClick={() => scrollToSection('media')}>Media</div>
            <div className='hover:font-semibold cursor-pointer py-2'onClick={() => scrollToSection('cases')}>Cases</div>
            <div className='hover:font-semibold cursor-pointer py-2' onClick={() => scrollToSection('faq')}>FAQ</div>
            <div className='hover:font-semibold cursor-pointer py-2' onClick={() => scrollToSection('contact')}>Contacts</div>
        </div>
      )}
    </div>
  )
}

export default Header
