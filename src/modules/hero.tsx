import { Button } from '@/components/ui/button';
import { useState } from 'react';
import victor from '@/assets/victor.png';
import textLogo from '@/assets/title.svg';
import Input from '@/components/ui/input';

export const Hero = () => {
  const [text, setText] = useState('');

  return (
    <section className='flex flex-col gap-y-4'>
      <img className='' src={textLogo} />

      <h3 className='text-2xl text-primary'>
        Догонялки по городу
        <br />с друзьями
      </h3>

      <p className='text-secondary text-lg'>
        Оставьте свою почту, чтобы
        <br />
        протестировать бета-версию
      </p>

      <div className='flex gap-x-2'>
        <Input
          className='w-full'
          text={text}
          placeholder='viktor@sightquest.ru'
          onChange={(e) => setText(e.target.value)}
        />
        <Button>Отправить</Button>
      </div>

      <img src={victor} />
    </section>
  );
};
