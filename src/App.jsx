import Home from './Pages/Home'
import Project from './Pages/Project'
import TechStack from './Pages/TechStacks'
import Certificates from './Pages/Certificates'
import { useEffect, useState } from 'react'
import Loading from './Components/Loading'
import './App.css'
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar'



function App() {

  const [ready, setReady] = useState(false)

  useEffect(() => {
    let timer = setTimeout(() => (setReady(true)), 5000)
    return () => clearTimeout(timer)
  }, [])

  if (ready) {
    return (
      <>
        <Navbar />
        <Home />
        <TechStack />
        <Project />
        <Certificates />
        <Contact />
      </>
    )
  } else {
    return (<><Loading /></>)
  }
}

export default App
