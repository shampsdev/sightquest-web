import React from 'react';
import { HeaderProps } from '../interfaces/header.interfaces';
import Image from 'next/image';
import viktor from '@/assets/textlogo.png';

export const HeaderMobile = (props: HeaderProps) => {
  return (
    <div className='block md:hidden'>
      <div className='flex items-center p-5'>
        <a href='/'>
          <Image src={viktor} alt='Viktor' width={120} height={200} />
        </a>
      </div>
    </div>
  );
};
