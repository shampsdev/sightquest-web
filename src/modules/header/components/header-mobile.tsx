import React from 'react';
import { HeaderProps } from '../interfaces/header.interfaces';

export const HeaderMobile = (props: HeaderProps) => {
  return (
    <div className='block md:hidden'>
      <div className='flex items-center p-5'>
        <a href='/'>
          <img className='h-10' src='https://i.imgur.com/oT0F1Mu.png' alt=''/>
        </a>
      </div>
    </div>
  );
};
