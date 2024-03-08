import { AboutCommand } from "./modules/about-command/about-command"
import { AboutProject } from "./modules/about-project/about-project"
import { AppSection } from "./modules/app-section"
import { Footer } from "./modules/footer"
import { Hero } from "./modules/hero"

function App() {
  return (
    <main className="bg-bg">
      <div className="min-h-screen max-w-[640px] w-[90%] mx-auto flex flex-col gap-y-12">
        <Hero/>
        <AboutProject/>
        <AppSection/>
        {/* <AboutCommand/> */}
        <Footer/>
      </div>
    </main>
  )
}

export default App
