import "./App.css"
import { HeroSection } from "./components/HeroSection"
import { ImageSection } from "./components/ImageSection"
import { VideoSection } from "./components/VideoSection"
import { WeOrganizeSection } from "./components/WeOrganizeSection"
import { WeUnderstandSection } from "./components/WeUnderstandSection"
import { Carousel } from "./utils/ui/Carousel"

function App() {
  return (
    <>
      <HeroSection />
      <ImageSection />
      <WeUnderstandSection />
      <Carousel />
      <WeOrganizeSection />
      <VideoSection />
    </>
  )
}

export default App
