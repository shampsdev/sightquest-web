'use client';

import { Layout } from '@/components/ui/layout';
import viktor from '@/assets/footer.png'
import Image from 'next/image';

import React from 'react';

export const Footer = () => {
  return (
    <footer className='flex justify-between w-full py-20 bg-black'>
      <Layout>
        <div className='grid grid-cols-2 items-center'>
          <Image
            src={viktor}
            alt='viktor'
          />
          <div className='flex gap-y-5 flex-col'>
            <div className='flex flex-row justify-center items-center gap-5'>
              <p className='text-xl lg:text-3xl text-white w-fit'>tg:</p>
              <div className='bg-[#CDFF8D] p-2 rounded-2xl text-xl lg:text-3xl'>
                shampiniony
              </div>
            </div>
            <div className='flex flex-row justify-center items-center gap-5'>
              <p className='text-xl lg:text-3xl text-white w-fit'>contact:</p>
              <div className='bg-[#CDFF8D] p-2 rounded-2xl text-xl lg:text-3xl'>
                officialsh
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </footer>
  );
};
