"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import img from '../assets/image 10.png'
import { ChevronRight } from 'lucide-react';
import ServiceComponent from './ServiceComponent';

function Service() {

    const [imageCount, setImageCount] = useState(1);

  const updateImageCount = () => {
    if (window.innerWidth < 640) {
      setImageCount(2);
    } else if (window.innerWidth < 768) {
      setImageCount(4);
    } else if (window.innerWidth < 1024) {
      setImageCount(4);
    } else {
      setImageCount(6);
    }
  };

  useEffect(() => {
    updateImageCount();
    window.addEventListener('resize', updateImageCount);
    return () => window.removeEventListener('resize', updateImageCount);
  }, []);

  return (
    <div className='mx-6 md:mx-28'>
        <div className='border border-gray-300'></div>
        <div className='my-6 md:my-12'>
            <div className="flex md:space-x-2 xl:space-x-4 justify-center">
                {[...Array(imageCount)].map((_, index) => (
                    <Image key={index} src={img} alt="Logo" width={200} height={200} />
                ))}
            </div>
        </div>
        <div className='border border-gray-300'></div>
        <ServiceComponent />
    </div>
  )
}

export default Service