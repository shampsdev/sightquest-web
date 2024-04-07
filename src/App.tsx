import { AboutCommand } from "./modules/about-command/about-command"
import { AboutProject } from "./modules/about-project/about-project"
import { AboutResults } from "./modules/about-results/about-results"
import { AppSection } from "./modules/app-section"
import { Footer } from "./modules/footer"
import { Hero } from "./modules/hero"

function App() {
  return (
    <main className="bg-bg">
      <div className="min-h-screen max-w-[640px] w-[95%] mx-auto flex flex-col gap-y-12">
        <Hero/>
        <AboutProject/>
        <AppSection/>
        <AboutResults/>
        <AboutCommand/>
        <Footer/>
      </div>
    </main>
  )
}

export default App
