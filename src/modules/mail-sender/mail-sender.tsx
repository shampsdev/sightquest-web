import { Border } from '@/components/ui/border';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import axios from 'axios';

export const MailSender = () => {
  const [mail, setMail] = useState('');
  const [sent, setSent] = useState(false);

  const sendEmail = () => {
    var options = {
      method: 'POST',
      url: 'https://sightquest.ru/api/subscribers/',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'insomnia/8.6.0',
      },
      data: { email: mail },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setSent(true);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <section className='gap-y-4 flex flex-col items-center'>
      <h3 className='lg:text-3xl text-lg text-center text-white'>
        Запись на лист ожидания <br /> на закрытое бета-тестирование.
      </h3>

      <Border className='flex items-center gap-x-4 lg:gap-x-12 w-max'>
        {sent ? (
          <p className='py-2 w-[30vw] px-8 text-center text-lg'>Спасибо!</p>
        ) : (
          <>
            <input
              onChange={(e) => {
                setMail(e.target.value);
              }}
              value={mail}
              className='lg:w-96 px-4 py-2 rounded-full'
              placeholder='Введите свой email'
            />
            <Button className='text-sm xs:text-lg px-2 xs:px-8' onClick={sendEmail}>
              Отправить
            </Button>
          </>
        )}
      </Border>
    </section>
  );
};
