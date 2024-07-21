import React from 'react'
import { LucideIcon } from 'lucide-react';

interface CaseCardProps  {
  stages: string ;
  description: string;
  Icon: LucideIcon;
}

const CasesCard: React.FC<CaseCardProps> = ({ stages , description , Icon }) => {
  return (
    <div className='bg-white shadow h-max space-y-4 xl:w-96 p-6 rounded-xl'>
      <div className='flex items-center space-x-2'>
        <Icon color='#528f38' size={60} />
        <p className='text-xl md:text-2xl font-bold'>{stages}</p>
      </div>
      <p className='text-medium'>{description}</p>
    </div>
  );
};

export default CasesCard