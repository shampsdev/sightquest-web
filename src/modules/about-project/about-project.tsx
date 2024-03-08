import { Title } from '@/components/ui/title'
import { Fact, FactProps } from './fact'
import decorLine from "@/assets/decor-line.svg"

const facts: FactProps[] = [
  {
    pretitle: "меньше",
    text: `АктивнОГО видА\nдеятельности`,
  },
  {
    pretitle: "БОЛЬШЕ",
    text: "монотонностИ\n В развлечениЯХ",
  },
  {
    pretitle: "СТРАДАЕТ",
    text: "культурное\n просвещение",
  }
] 

export const AboutProject = () => {
  return (
    <section className="text-primary">
      <Title>
        О проекте
      </Title>
      <p className="uppercase pt-4 text-secondary">
        Наш продукт был создан с целью<br/>
        найти решение существующим<br/>
        <span className="text-primary">проблемам 21 века.</span>
      </p>

      <ul>
        { facts.map((fact, index) => <li key={index}>
          <Fact
            key={index}
            props={fact}
            number={index + 1}
          />
        </li>) }
      </ul>

      <img
        className='mt-4'
        src={decorLine}
      />

      <Title>Отслеживай свои результаты</Title>
    </section>
  )
}
