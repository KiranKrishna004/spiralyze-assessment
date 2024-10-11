import { useState } from "react"
import "./App.css"
import { Navbar } from "./components/Navbar"

function App() {
  const [page, setPage] = useState("/")
  return (
    <div>
      <Navbar setPage={setPage} page={page} />
    </div>
  )
}

export default App
