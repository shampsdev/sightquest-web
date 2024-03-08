import plus from "@/assets/plus.svg"
import decor2 from "@/assets/decor-2.svg"
import decor3 from "@/assets/decor-3.svg"
import { Title } from "@/components/ui/title"

export const AppSection = () => {
  return (
    <section>
      <Title>
        Приложение
      </Title>

      <p className="text-secondary">
        Которое точно решит вашу<br/> 
        проблему, если вам скучно<br/>
        и вы не знаете как провести время
      </p>

      <div>
        <div className="grid grid-cols-2 grid-rows-3 gap-4">
          <div 
            className="row-span-2 col-start-2 row-start-1 bg-[#555555] rounded-3xl"
          >
            <img
              className=""
              src={decor3}
            />
          </div>
          <div className="col-start-2 row-start-3 bg-primary rounded-3xl flex items-center">
            <p className="text-3xl px-4">
              Ввести код
            </p>
          </div>
          <div className="row-span-3 col-start-1 relative row-start-1 bg-[#555555] rounded-3xl h-80">
            <img
              className="absolute top-4 left-4"
              src={plus}
            />

            <img
              className="w-full h-full"
              src={decor2}
            />

            <p className="absolute bottom-4 left-4 text-3xl text-primary">
              Играть<br/>
              с друзьями
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
