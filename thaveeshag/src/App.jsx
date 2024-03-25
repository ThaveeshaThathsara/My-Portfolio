import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import AboutAnimation from "./Animations/AboutAnimations"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      
        <Home/>
        {/* <Projects/> */}
        {/* <About/> */}
        {/* <AboutAnimation/> */}


      </div>
      
    </>
  )
}

export default App
