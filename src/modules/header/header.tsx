'use client'

import React from 'react'
import { HeaderHoc } from './components/header.hoc'
import { HeaderProps } from './interfaces/header.interfaces'

export const Header = (props: HeaderProps) => {
  return (
    <header className='w-full'>
      <HeaderHoc {...props} />
    </header>
  )
}
