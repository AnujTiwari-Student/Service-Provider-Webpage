import Image from 'next/image'
import React from 'react'
import logo from "../assets/logo-bg-3 2.png"
import { File, Mail, MapPin, Phone } from 'lucide-react'

function Contact() {
  return (
    <div className='bg-black mx-6 md:mx-28 rounded-xl pb-10 md:pl-3 lg:pl-0'>
      <div className='flex justify-center my-8'>
        <div className='my-8'>
          <Image src={logo} alt='logo' />
        </div>
      </div>
      <div className='flex flex-col md:flex-row space-y-6 md:space-y-0 xl:ml-12'>
          <div className='flex flex-col md:flex-row px-12 md:px-0 xl:px-12 md:mx-2 xl:mx-0'>
                <div className='flex flex-col space-y-2'>
                  <div className='flex space-x-4 md:space-x-2 xl:space-x-4'>
                    <Phone color='#d1d1d1' />
                    <p className='text-gray-500 font-semibold'>Contact nums</p>
                  </div>
                  <div>
                    <p className='text-white'>+91 9876543210</p>
                  </div>
                </div>
          </div>
          <div className='flex flex-col md:flex-row px-12 md:px-0 xl:px-12 md:mx-2 xl:mx-0'>
                <div className='flex flex-col space-y-2'>
                  <div className='flex space-x-4 md:space-x-2 xl:space-x-4'>
                    <Mail color='#d1d1d1' />
                    <p className='text-gray-500 font-semibold'>Gmail</p>
                  </div>
                  <div>
                    <p className='text-white'>demo@gmail.com</p>
                  </div>
                </div>
          </div>
          <div className='flex flex-col md:flex-row px-12 md:px-0 xl:px-12 md:mx-2 xl:mx-0'>
                <div className='flex flex-col space-y-2'>
                  <div className='flex space-x-4 md:space-x-2 xl:space-x-4'>
                    <MapPin color='#d1d1d1' />
                    <p className='text-gray-500 font-semibold'>Address</p>
                  </div>
                  <div>
                    <p className='text-white'>Mumbai , India</p>
                  </div>
                </div>
          </div>
          <div className='flex flex-col md:flex-row px-12 md:px-0 xl:px-12 md:mx-2 xl:mx-0'>
                <div className='flex flex-col space-y-2'>
                  <div className='flex space-x-4 md:space-x-2 xl:space-x-4'>
                    <File color='#d1d1d1' />
                    <p className='text-gray-500 font-semibold'>Leave a request</p>
                  </div>
                  <div>
                    <p className='text-white'>Leave a request</p>
                  </div>
                </div>
          </div>
      </div>
      <p className='text-gray-300 mt-8 flex justify-center'>We work throughout the world</p>
    </div>
  )
}

export default Contact