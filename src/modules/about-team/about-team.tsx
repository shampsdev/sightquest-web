import { PersonCard, PersonCardProps } from './person-card';
import commandTitle from '@/assets/command.png';
import mike from '@/assets/command/mike.jpg';

const team: PersonCardProps[] = [
  {
    university: 'ИТМО',
    amplua: 'Фронтенд',
    name: 'МИШЕЛЬ',
    surname: 'де ДЖОФРОЙ',
    photo: mike,
  },
  {
    university: 'ИТМО',
    amplua: 'Фронтенд',
    name: 'МИТЯ',
    surname: 'МАМЧЕНКО',
    photo: mike,
  },
  {
    university: 'ИТМО',
    amplua: 'Фронтенд',
    name: 'МИТЯ',
    surname: 'МАМЧЕНКО',
    photo: mike,
  },
];

export const AboutTeam = () => {
  return (
    <section className='bg-secondary-bg py-8 px-5 -mx-2'>
      <img src={commandTitle} />

      <div className='flex overflow-x-scroll snap-x snap-mandatory my-10 gap-5 -mx-5'>
        {team.map((value, index) => (
          <div
            className='snap-center w-5/6 px-5'
            style={{ flex: '0 0 auto' }}
            key={index}
          >
            <PersonCard {...value} />
          </div>
        ))}
      </div>

      <div className='flex text-bg justify-between'>
        <p className='max-w-[60%]'>
          Команда, которая создала это приложение, состоит из равного количества
          фронтэнденров и бекэндеров, а также дизайнера. Вместе мы распределили
          задачи и старались выполнять их в срок.{' '}
        </p>
        <div className=' '>
          <p className='flex justify-between items-center text-sm'>
            <span>Спб</span>
            <span>2024</span>
          </p>

          <span>ИТМО x НИУ ВШЭ</span>
        </div>
      </div>
    </section>
  );
};
