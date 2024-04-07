import { PersonCard, PersonCardProps } from "./person-card"
import commandTitle from "@/assets/command.png"
import mike from "@/assets/command/mike.jpg"
import Flicking from "@egjs/react-flicking"
import "@egjs/react-flicking/dist/flicking.css";
import { useState } from "react";
import './styles.css'
import { Item } from "./item";
import { useSwipeable } from "react-swipeable";

const commands: PersonCardProps[] = [
  {
    university: "ИТМО",
    amplua: "Фронтенд",
    name: "МИШЕЛЬ",
    surname: "де ДЖОФРОЙ",
    photo: mike
  },
  {
    university: "ИТМО",
    amplua: "Фронтенд",
    name: "МИШЕЛЬ",
    surname: "де ДЖОФРОЙ",
    photo: mike
  }
]


export const AboutCommand = () => {
  const [panels, setPanels] = useState([0, 1, 2, 3, 4]);

  return (
    <section className="bg-secondary-bg py-8">
      <img
        src={commandTitle}
      />

      {/* <div className="relative">
        {
          commands.map((value, index) => <React.Fragment key={index}>
          <PersonCard
            {...value}
          />
        </React.Fragment>)
        }
      </div> */}

      <div className="flex text-bg justify-between">
        <p className="max-w-[60%]">Команда, которая создала это приложение, состоит из равного количества фронтэнденров и бекэндеров, а также дизайнера.  Вместе мы распределили задачи и старались выполнять их в срок. </p>
        <div className=" ">
          <p className="flex justify-between items-center text-sm">
            <span>Спб</span>
            <span>2024</span>
          </p>

          <span>ИТМО x НИУ ВШЭ</span>
        </div>
      </div>
    </section>
  )
}
