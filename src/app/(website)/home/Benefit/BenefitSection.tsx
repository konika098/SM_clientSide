import { benefit } from '@/utils/data';
import Image from 'next/image';
import React from 'react';

const BenefitSection = () => {
    return (
        <div className='flex flex-col gap-6'>
           {
            benefit.map((item,index)=>(
                <div key={index} className='border-[#EDEDED] rounded-2xl p-4 hover:bg-[#5F7A69]'>
                    <Image src={item.icon} alt='benefit icon'/>
                    <h1 className='text-lg font-medium text-secondary_clr mt-6'>{item.title}</h1>
                    <p className='text-base text-third_clr mt-1'>{item.des}</p>

                </div>
            ))
           } 
        </div>
    );
};

export default BenefitSection;