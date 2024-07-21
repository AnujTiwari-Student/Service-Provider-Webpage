import Image from 'next/image';
import React from 'react';
import img from "../assets/hope-gif1.png";
import CasesCard from './CasesCard';
import { FileBarChart, FileCode2, Highlighter, Rocket, TabletSmartphone, UserRoundCog } from 'lucide-react';

const casesData = [
  {
    stages: "Analysis",
    description: "We craft precise technical specs, aligning with your business, technology, and user requirements.",
    Icon: FileBarChart
  },
  {
    stages: "Design",
    description: "We adapt the customer's corporate identity to the platform guidelines. We draw convenient and understandable interfaces.",
    Icon: Highlighter
  },
  {
    stages: "Development",
    description: "We create an extensible architecture, write clean and stable code. We integrate with customer technologies.",
    Icon: FileCode2
  },
  {
    stages: "Testing",
    description: "We carry out functional testing and do bug fixes. We adapt the application to different phone resolutions.",
    Icon: TabletSmartphone
  },
  {
    stages: "Launching",
    description: "We design the application page and publish it in the App Store and Google Play stores. Users can download the app.",
    Icon: Rocket
  },
  {
    stages: "Support",
    description: "We monitor the stability of the application, update it for new devices and versions of iOS and Android.",
    Icon: UserRoundCog
  }
];

function Cases() {
  return (
    <div className='md:mx-28 m-6 border-b'>
      <div className='mt-20 mb-6'>
        <h1 className='text-2xl md:text-4xl font-bold'>Application Development Stages</h1>
      </div>
      <div className='flex flex-col xl:flex-row mb-20'>
        <div className='flex flex-col space-y-4'>
          {casesData.slice(0, 3).map((caseItem, index) => (
            <CasesCard
              key={index}
              stages={caseItem.stages}
              description={caseItem.description}
              Icon={caseItem.Icon}
            />
          ))}
        </div>
        <div className='hidden lg:flex justify-center items-center'>
          <Image src={img} alt="img" height={950} />
        </div>
        <div className='mt-4 xl:mt-0 flex flex-col space-y-4'>
          {casesData.slice(3).map((caseItem, index) => (
            <CasesCard
              key={index}
              stages={caseItem.stages}
              description={caseItem.description}
              Icon={caseItem.Icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cases;
