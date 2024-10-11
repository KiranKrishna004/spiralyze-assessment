import { useState } from "react"
import "./App.css"
import { HeroSection } from "./components/HeroSection"
import { ImageSection } from "./components/ImageSection"
import { Navbar } from "./components/Navbar"

function App() {
  const [page, setPage] = useState("/")
  return (
    <div>
      <Navbar setPage={setPage} page={page} />
      <HeroSection />
      <ImageSection />
    </div>
  )
}

export default App
