import { Border } from '@/components/ui/border';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';

export const MailSender = () => {
  const [main, setMain] = useState('');

  const sendEmail = () => {};

  return (
    <section>
      <h3 className='text-3xl text-center text-white'>
        Запись на лист ожидания <br /> на закрытое бета-тестирование.
      </h3>

      <Border className='flex items-center gap-x-12 w-max mx-auto'>
        <input
          className='px-4 py-2 rounded-full w-96'
          placeholder='Введите свой email'
        />

        <Button className='text-lg px-8' onClick={sendEmail}>
          Отправить
        </Button>
      </Border>
    </section>
  );
};
