import ArrowIcon from '@/assets/arrow.icon'
import { Layout } from '@/components/ui/layout'
import React from 'react'
import Image from 'next/image'
import { Border } from '@/components/ui/border'
import saintP from '@/assets/saint-p.jpg'
import { ArrowBigIcon } from '@/assets/arrow-big.icon'

const values = [
  {
    title: 'Цель бегуна',
    description: 'собрать все «точки активности» (у каждого бегуна она своя), при этом, не попасться ловцам, местоположение которых ему неизвестно',
  }, 
  {
    title: 'Цель ловца',
    description: 'поймать бегуна, для этого у них неограниченные ресурсы и его локация. Однако, когда ловцы поймали бегуна, происходит «ротация»',
  },
  {
    title: 'Ротация',
    description: 'один из ловцов становится бегуном а тот, что был бегуном становится ловцом. При этом ловцы «заморожены» на 30 минут',
  }
]

export const AboutProject = () => {
  return (
    <section className='font-custom'>
      <Layout>
        <h3 className='text-white mb-5 text-2xl lg:text-3xl opacity-75'>О проектe</h3>
        
        <ul className='flex flex-col lg:flex-row w-full gap-y-12 lg:gap-x-12 lg:w-max mx-auto'>
          {
            values.map((value, index) => (
              <li className='p-4 border-4 rounded-3xl w-full lg:w-56 border-white flex flex-col items-center gap-y-4' key={index}>
                <h4 className='text-xl p-4 w-40 bg-white text-center rounded-2xl'>
                  { value.title }
                </h4>
                <ArrowIcon/>
                <p className='text-center text-white'>{ value.description }</p>
              </li>
            ))
          }
        </ul>
        
        <div className='mt-12 flex flex-col lg:flex-row lg:justify-around items-center'>
          <div className='-translate-x-5 relative max-w-64 xs:max-w-[320px] lg:max-w-[560px]'>
            <Image
              className='w-64 xs:w-80 lg:w-[560px] left-0 rounded-[32px] lg:rounded-[40px]'
              src={saintP}
              alt='saintP'
            />

            <div className='absolute top-0 h-full -right-10 w-30 flex flex-col justify-around items-center rounded-2xl px-4 lg:px-8 bg-customPrimary'>
              <h3 className='text-center lg:text-lg'>Точки активности</h3>

              <p className='text-xs lg:text-md max-w-[120px] lg:max-w-[240px]'>
                Достопримечательность, точка интереса, где нужно выполнить задание, например снять на фотографию. Эта фотография будет выслана остальным участникам
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </section>
  )
}
