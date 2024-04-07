import arrow from '@/assets/arrow.svg';

export type PersonCardProps = {
  university: string;
  amplua: string;
  name: string;
  surname: string;
  photo: string;
};

export const PersonCard = (props: PersonCardProps) => {
  return (
    <label className='text-primary'>
      <div className='relative'>
        <img className='w-full h-full' src={props.photo} />
        <p className='absolute top-6 left-6'>
          Университет
          <br />
          <span className='text-2xl'>{props.university}</span>
        </p>

        <p className='absolute top-6 right-6 text-right'>
          Амплуа
          <br />
          <span className='text-2xl'>{props.amplua}</span>
        </p>

        <p className='absolute bottom-6 left-6 text-4xl'>
          {props.name}
          <br />
          {props.surname}
        </p>

        <button className='absolute right-10 bottom-10'>
          <img className='scale-150' src={arrow} />
        </button>
      </div>
    </label>
  );
};
