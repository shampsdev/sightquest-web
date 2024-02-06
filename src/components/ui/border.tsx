import React from 'react'
import { twMerge } from 'tailwind-merge';

type borderProps = {
  className?: string;
  children: React.ReactNode; 
}

export const Border = (props: borderProps) => {
  return (
    <div className={twMerge('p-2 lg:p-4 rounded-full bg-customPrimary', props.className)}>
      { props.children }
    </div>
  )
}
