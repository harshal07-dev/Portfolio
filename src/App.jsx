import React from 'react'
import BlurBackground from "./components/BlurBackground"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Marquee from './components/Marquee'
import Contact from './components/Contact'


const App = () => {
  return (
    <>
    <BlurBackground/>
    <main className='antialiased overflow-x-hidden max-w-7xl mx-auto
    relative z-10'>
      <Navbar/>
      <Hero/>
      <Marquee/>
      <Projects/>
      <About/>
      <Contact/>
    </main>
    </>
  )
}

export default App