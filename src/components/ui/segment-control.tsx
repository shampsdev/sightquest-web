'use client'

import React, { useEffect, useId, useState } from 'react'
import { motion } from 'framer-motion'
import { HeaderProps } from '@/modules/header/interfaces/header.interfaces';
import Link from 'next/link';

export const SegmentControl = (props: HeaderProps) => {
  const [currentIndex, setCurrentIndex] = useState(props.initialIndex);
  const id = useId();

  return (
    <>
      <div 
        className='fixed z-50 bg-detail left-0 right-0 mx-auto inline-flex p-1 px-2 gap-x-1 justify-around w-[400px] rounded-full my-4 shadow-2xl'
      >
        {
          props.items.map((item, index) => (
            <button
              key={index}
              className='min-w-11 rounded-xl px-4 py-2 relative'
              onClick={() => setCurrentIndex(index)}
            >
              {currentIndex === index && (
                <motion.div
                  layoutId={id}
                  className='bg-customPrimary absolute top-0 left-0 h-full w-full rounded-full shadow-lg'
                />
              )}
              <Link 
                href={item.to}
                className='z-10 w-32 font-custom translate-y-[1px] relative text-black'
              >{item.title}</Link>
            </button>
          ))
        }
      </div>
    </>
  )
}
