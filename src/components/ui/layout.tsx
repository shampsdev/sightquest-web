import React from 'react'
import { twMerge } from 'tailwind-merge';

type LayoutProps = {
  children: React.ReactNode;
  className?: string; 
}

export const Layout = (props: LayoutProps) => {
  return (
    <div className={
      twMerge('w-[98%] md:max-w-[1080px] md:w-4/5 mx-auto', props.className)
    }>
      { props.children }
    </div>
  )
}
