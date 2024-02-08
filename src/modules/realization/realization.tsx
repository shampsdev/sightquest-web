import React from 'react'
import realization from '@/assets/realization.png'
import realization2 from '@/assets/realization2.png'
import viktor from '@/assets/viktor.png'
import { Layout } from '@/components/ui/layout'
import Image from 'next/image'
import { ArrowBigIcon } from '@/assets/arrow-big.icon'

export const Realization = () => {
  return (
    <section id='realization' className='font-custom'>
      <Layout>
        <h3 className='text-white mb-5 text-2xl lg:text-3xl opacity-75'>Реализация</h3>
        <div className='flex flex-col lg:flex-row lg:justify-around items-center'>
          <Image
            width={320}
            height={375}
            src={realization}
            alt='realization'
          />

          <Image
            width={320}
            src={realization2}
            alt='realization'
          />
        </div>

        {/* <div className='-translate-x-5 relative max-w-[320px] lg:max-w-[400px] mx-auto'>
          <Image
            className='w-64 xs:w-80 lg:w-[400px] left-0 rounded-[32px] lg:rounded-[40px]'
            src={realization}
            alt='saintP'
          />

          <div className='absolute top-0 h-full -right-10 w-30 flex flex-col justify-between items-center rounded-2xl px-8 bg-customPrimary'>
            <h3 className='text-center text-lg'>Цели</h3>
            <ArrowBigIcon />
            <p className='text-center'>Культурное<br />просвещение</p>
            <ArrowBigIcon />
            <p className='text-center'>Разнообразие<br /> в стандартных<br /> развлечениях</p>
            <ArrowBigIcon />
            <p className='text-center'>Социализация</p>
          </div>
        </div> */}

        <div className='pt-10'>
          <h3 className='text-center text-3xl text-white'>
            Ждите в <label className='text-customPrimary'>AppStore</label><br />
            <label className='text-customPrimary'>и PlayMarket</label>
          </h3>

          <Image
            className='w-64 mx-auto mt-4'
            src={viktor}
            alt='viktor'
          />
        </div>
      </Layout>
    </section>
  )
}
