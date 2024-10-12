import "./App.css"
import { HeroSection } from "./components/HeroSection"
import { ImageSection } from "./components/ImageSection"
import { WeOrganizeSection } from "./components/WeOrganizeSection"
import { WeUnderstandSection } from "./components/WeUnderstandSection"
import { Carousel } from "./utils/ui/Carousel"

function App() {
  return (
    <div>
      <HeroSection />
      <ImageSection />
      <WeUnderstandSection />
      <Carousel />
      <WeOrganizeSection />
    </div>
  )
}

export default App
