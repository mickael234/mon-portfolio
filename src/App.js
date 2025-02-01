import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css" // Importez les styles CSS de AOS

import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Resume from "./components/Resume"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Certifications from "./components/Certifications"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { ThemeProvider } from "./ThemeContext"
import "./style.css"

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <Hero />
        <About />
        <Resume />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App

