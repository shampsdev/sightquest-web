import textLogo from '@/assets/title.svg'
import victor from '@/assets/victor.png'
import { Button } from '@/components/ui/button'
import Input from '@/components/ui/input'

export const Hero = () => {
  return(
    <section className='flex flex-col gap-y-4'>
      <img
        className=""
        src={textLogo}
      />

      <h3 className="text-2xl text-primary">
        Догонялки по городу<br/>
        с друзьями
      </h3>

      <p className="text-secondary text-lg">
        Оставьте свою почту, чтобы<br/> 
        протестировать бета-версию
      </p>

      <div className='flex gap-x-2'>
        <Input 
          className="w-full"
          text='123'
        />
        <Button>Отправить</Button>
      </div>

      <img
        src={victor}
      />
    </section>
  )
}