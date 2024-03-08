import whiteLogo from "@/assets/white-logo.svg" 

export const Footer = () => {
  return (
    <footer className="text-secondary flex flex-col gap-y-2 pb-10">
      <div className="border-b-4 uppercase py-4 text-xl text-center border-secondary flex flex-col gap-y-4">
        <h3>
          Присоединяйтесь<br/> к тестированию бета-версии
        </h3>

        <h3>
          оставьте свой email
        </h3>
      </div>

      <img
        className="w-3/5 mx-auto py-4"
        src={whiteLogo}
      />
      <div className="flex flex-col gap-y-2">
        <div className="text-secondary text-center text-xl">
          <h3>Наш телеграм канал:</h3>
          <h3>@shampiniony</h3>
        </div>

        <div className="text-secondary text-center text-xl">
          <h3>Наши контакты:</h3>
          <h3>@officialsh</h3>
        </div>
      </div>
    </footer>
  )
}
