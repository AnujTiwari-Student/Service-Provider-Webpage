import Image from 'next/image'
import React from 'react'
import img from "../assets/IMG_6115.png"

const teamStats = [
    { value: '28', label: 'members' },
    { value: '+100', label: 'projects' },
    { value: '+7 years', label: 'in IT shape' },
  ];

function OurTeam() {
  return (
    <div className='bg-[#F8F8FF] overflow-y-hidden mb-5'>
            <div className='mx-6 md:mx-28 my-10 flex flex-col xl:flex-row gap-8 xl:gap-0'>
                <div className='flex flex-col space-y-10'>
                    <h1 className='text-2xl md:text-4xl font-bold'>Our Team</h1>
                    <p className='xl:w-3/4'>Thousand is a full-cycle digital production company with its own product analytics, design, web and mobile development.</p>
                    <div className='flex space-x-8 md:space-x-16 xl:space-x-20'>
                    {teamStats.map((stat, index) => (
                        <div key={index} className='flex flex-col space-y-2'>
                            <h1 className='text-2xl md:text-4xl font-bold'>{stat.value}</h1>
                            <p className='text-gray-500 text-lg'>{stat.label}</p>
                        </div>
                        ))}
                    </div>
                    <div>
                      <p className='xl:w-3/4'>All the necessary specialists - from a designer to a tester - are on our staff. We hire the best specialists in the market. Its expensive but worth it</p>
                    </div>
                </div>
                <div>
                    <Image className='shadow-xl' src={img} alt="img" height={500} />
                </div>
            </div>
            
    </div>
  )
}

export default OurTeam