import React from 'react'
import { HeaderProps } from '../interfaces/header.interfaces'
import { SegmentControl } from '@/components/ui/segment-control'
import { twMerge } from 'tailwind-merge'

export const HeaderDesktop = (props: HeaderProps) => {
  // const headerStyles = 

  return (
    <div className={twMerge(
      'md:block hidden mx-auto w-max',
      props.className
    )}>
      <SegmentControl 
        items={props.items}
        initialIndex={props.initialIndex}
      />
    </div>
  )
}
