import { ChevronRight } from 'lucide-react';
import React from 'react';

const services = [
  "iOS development",
  "Android development",
  "Web development",
  "UI/UX development",
  "Testing",
  "Launch",
  "IT Consultant",
];

const technologies = [
    {
      category: 'Web',
      tech: 'PHP / Javascript / Node.JS / Web Socket / Socket.io / Vue.js / Nuxt / MySQL / Laravel / GO lang / django / Python',
    },
    {
      category: 'Mobile',
      tech: 'Swift / Kotlin / Alamofire / Firebase / CoreData / Room / Realm / Coroutine / RxJava / RxSwift / Unit Test / Navigation',
    },
  ];
  

function ServiceComponent() {
  return (
    <div>
      <div className='flex flex-col md:flex-row md:space-x-12 my-14'>
        <div className='flex flex-col md:w-3/5 xl:w-auto'>
          <h1 className='text-3xl font-bold mb-12'>Full Development Cycle</h1>
          <p className='text-lg md:text-medium font-semibold mb-10'>We use proven technologies</p>
          <div className='flex flex-col'>
          {technologies.map((item, index) => (
              <div key={index}>
                <h1 className='text-2xl font-bold mb-2'>{item.category}</h1>
                <div className='md:w-4/5 xl:w-4/6 mb-10'>
                  <p className='text-medium'>{item.tech}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col my-10 md:my-0 space-y-2 md:space-y-10 xl:space-y-8'>
          {services.map((service, index) => (
            <div key={index} className='flex space-x-2 items-center cursor-pointer'>
              <p className={service === "Android development" ? 'underline underline-offset-4 decoration-green-500' : ''}>{service}</p>
              <ChevronRight color='#10d513' size={18} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceComponent;
