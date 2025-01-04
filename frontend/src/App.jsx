import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import PlaneTrusses from "./components/PlaneTrusses"

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plane_trusses" element={<PlaneTrusses />} />
      </Routes>
    </Router>
  )
}

export default App
