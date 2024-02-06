import { Border } from '@/components/ui/border';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';

export const MailSender = () => {
  const [mail, setMail] = useState('');

  const sendEmail = () => {};

  return (
    <section className='gap-y-4 flex flex-col items-center'>
      <h3 className='lg:text-3xl text-lg text-center text-white'>
        Запись на лист ожидания <br /> на закрытое бета-тестирование.
      </h3>

      <Border className='flex items-center gap-x-4 lg:gap-x-12 w-max'>
        <input
          onChange={(e) => {
            setMail(e.target.value);
          }}
          value={mail}
          className='px-4 py-2 rounded-full'
          placeholder='Введите свой email'
        />

        <Button className='text-lg px-8' onClick={sendEmail}>
          Отправить
        </Button>
      </Border>
    </section>
  );
};
