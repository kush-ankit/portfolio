import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Layout from './Layout'
import Project from './Pages/Project'
import Skills from './Pages/Skills'
import Certificates from './Pages/Certificates'
import { useEffect, useState } from 'react'
import Loading from './Components/Loading'
import './App.css'
import Contact from './Pages/Contact'



function App() {

  const [ready, setReady] = useState(false)

  useEffect(() => {
    let timer = setTimeout(() => (setReady(true)), 5000)
    return () => clearTimeout(timer)
  }, [])

  if (ready) {
    return (
      <>
        <Routes>
          <Route exact path="/" element={<Layout />}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/projects" element={<Project />} />
            <Route exact path="/skills" element={<Skills />} />
            <Route exact path="/certificates" element={<Certificates />} />
            <Route exact path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </>
    )
  } else {
    return (<><Loading /></>)
  }
}

export default App
