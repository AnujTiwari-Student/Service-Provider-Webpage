import Image from 'next/image'
import React from 'react'
import img1 from '../assets/Group 1.png'
import Consultant from './Consultant'

function PhoneImage() {
  return (
    <div>
        <div className='hidden xl:block absolute top-0 right-0'>
            <Image src={img1} alt='' />
        </div>
    </div>
  )
}

export default PhoneImage