'use client'

import React, { useEffect, useId, useState } from 'react'
import { motion } from 'framer-motion'

type SegmentControlProps = {
  items: string[];
  initialIndex: number;
}

export const SegmentControl = ({items, initialIndex}: SegmentControlProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const id = useId();

  return (
    <>
      <div 
        className='bg-detail inline-flex p-1 px-2 gap-x-1 justify-between rounded-full my-4 shadow-2xl'
      >
        {
          items.map((item, index) => (
            <button
              key={index}
              className='min-w-11 rounded-xl px-1 py-2 relative'
              onClick={() => setCurrentIndex(index)}
            >
              {currentIndex === index && (
                <motion.div
                  layoutId={id}
                  className='bg-customPrimary absolute top-0 left-0 h-full w-full rounded-full shadow-lg'
                />
              )}
              <p className='z-10 w-32 font-custom translate-y-[1px] relative text-black'>{item}</p>
            </button>
          ))
        }
      </div>
    </>
  )
}
