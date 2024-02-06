import React from 'react'
import { HeaderDesktop } from './header-desktop'
import { HeaderMobile } from './header-mobile'
import { HeaderProps } from '../interfaces/header.interfaces'

export const HeaderHoc = (props: HeaderProps) => {
  return (
    <>
      <HeaderDesktop {...props}/>
      <HeaderMobile {...props}/>
    </>
  )
}
