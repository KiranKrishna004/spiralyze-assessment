import "./App.css"
import { HeroSection } from "./components/HeroSection"
import { ImageSection } from "./components/ImageSection"
import { WeUnderstandSection } from "./components/WeUnderstandSection"
import { Carousel } from "./utils/ui/Carousel"

function App() {
  return (
    <div>
      <HeroSection />
      <ImageSection />
      <WeUnderstandSection />
      <Carousel />
    </div>
  )
}

export default App
