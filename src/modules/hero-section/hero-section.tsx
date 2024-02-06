import React from 'react'
import Image from 'next/image'
import viktor from '@/assets/viktor.png'
import logo from '@/assets/logo.png'
import { useParallax } from 'react-scroll-parallax'
import { Layout } from '@/components/ui/layout'

export const HeroSection = () => {
  return (
    <div className='font-custom'>
      <Layout className='relative'>
        <div className='h-52'>
          <h1 className='text-4xl lg:text-5xl text-white'>
            <label className='text-customPrimary'>Поиграй</label> с друзьями<br/>
            в современные<br/> 
            <label className='text-customPrimary'>догонялки</label>
          </h1>

          <Image
            className='absolute w-56 right-0 top-10'
            src={viktor}
            alt='viktor'
          />
        </div>
        <p className='text-white w-64'>
          Игра рассчитана на троих<br/> игроков, из них двое будут ловцами, <br/>а один — бегуном
        </p>
      </Layout>
      {/* <div className='relative mt-16 w-[900px] mx-auto'>
        <Image 
          className='absolute top-10 w-80'
          src={viktor}
          alt='viktor'
        />
        <h1 className='text-center text-6xl text-white'>
          Поиграй с друзьями<br/> в современные<br/> <label className='text-customPrimary'>догонялки</label>
        </h1>
      </div>
      <h3 className='text-center mt-10 font-custom text-white text-xl'>
        Приложение-игра
      </h3>
      <Image
        src={logo}
        className='mt-20 mx-auto w-56'
        alt='logo'
      /> */}

    </div>
  )
}
