import { Plus } from 'lucide-react'
import React from 'react'

function FAQPage() {
  return (
    <div className='mx-6 md:mx-28 border-t'>
      <div className='my-8'>
        <h1 className='text-2xl md:text-4xl font-bold'>FAQ</h1>
      </div>
        <div className='border border-gray-300 my-8'></div>
      <div className='flex flex-col xl:flex-row'>
          <div className='flex flex-col space-y-6 mb-8 xl:mb-0'>
            <div className='flex justify-between space-x-40 border-b'>
              <h1 className='md:text-2xl font-semibold'>What is the cost of a mobile application</h1>
              <div className='bg-gray-300 rounded-full h-10 w-20 md:w-10 flex items-center justify-center border-xl'>
                <Plus color='#528f38' />
              </div>
            </div>
            <div className='flex justify-between space-x-40 border-b'>
              <h1 className='md:text-2xl font-semibold'>What is the code of mobile application</h1>
              <div className='bg-gray-300 rounded-full h-10 w-20 md:w-10 flex items-center justify-center border-xl'>
                <Plus color='#528f38' />
              </div>
            </div>
          </div>
          <div className='xl:w-2/4 xl:ml-8'>
            <h1 className='text-xl md:text-2xl font-semibold'>How long will development take?</h1>
            <p className='my-6'>Development terms directly depend on the requirements for the mobile application, the characteristics of the company, as well as the wishes of the customer.</p>
            <div>Average development time from start to finished application:
            <div>Medium projects up to <span className='font-bold'>3 months</span>.</div>
            <p>Large projects about <span className='font-bold'>4-6 months</span>.</p>
            To get a more accurate estimate of the project completion time, it is necessary to determine the main task of the application, think over its logic and functionality.</div>
            <div className='border border-gray-300 my-10'></div>
            <div className='flex justify-between space-x-40 my-10'>
              <h1 className='md:text-2xl font-semibold'>What is the code of mobile application</h1>
              <div className='bg-gray-300 rounded-full h-10 w-20 md:w-10 flex items-center justify-center border-xl'>
                <Plus color='#528f38' />
              </div>
            </div>
          </div>
      </div>
    </div>
  )
} 

export default FAQPage