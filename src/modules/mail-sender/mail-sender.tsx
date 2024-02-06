import { Border } from '@/components/ui/border'
import { Button } from '@/components/ui/button';
import React, { useState } from 'react'

export const MailSender = () => {
  const [main, setMain] = useState('');

  const sendEmail = () => {

  }

  return (
    <section>
      <h3 className='text-3xl text-center text-white'>
        Получите ссылку на тестирование<br/>
        бета-версии приложения
      </h3>

      <Border
        className='flex items-center gap-x-12 w-max mx-auto'
      >
        <input
          className='px-4 py-2 rounded-full w-96'
          placeholder='Введите свой email'
        />

        <Button
          className='text-lg px-8'
          onClick={sendEmail}
        >Отправить</Button>
      </Border>
    </section>
  )
}
