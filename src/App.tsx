import { useState } from "react"
import "./App.css"
import { Navbar } from "./components/Navbar"
import { HeroSection } from "./components/HeroSection"

function App() {
  const [page, setPage] = useState("/")
  return (
    <div>
      <Navbar setPage={setPage} page={page} />
      <HeroSection />
    </div>
  )
}

export default App
