import ArrowIcon from '@/assets/arrow.icon'
import { Layout } from '@/components/ui/layout'
import React from 'react'
import Image from 'next/image'
import { Border } from '@/components/ui/border'

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
        <h3 className='text-white text-3xl opacity-75'>О проектe</h3>
        
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

        <div className='bg-saint-p bg-no-repeat rounded-3xl w-96 justify-end flex'>
          <Border className='rounded-3xl h-full w-1/2'>
            <h4 className='font-bold'>Точки активности</h4>
            <p className='text-sm mt-4'>
              Достопримечательность, точка интереса, где нужно выполнить задание, например снять на фотографию. Эта фотография будет выслана остальным участникам
            </p>
          </Border>
        </div>
      </Layout>
    </section>
  )
}
