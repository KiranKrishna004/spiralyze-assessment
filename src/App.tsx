import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import "./App.css"
import { HomePage } from "./pages/HomePage"
import { ThankYou } from "./pages/ThankYou"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default App
