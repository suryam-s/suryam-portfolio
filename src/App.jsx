import React from 'react'
import './index.css'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Skills from './components/skills/skills'
import Project from './components/portfolio/project'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Skills />
        <Project />
        <Contact />
        <Footer />
    </>
  )
}

export default App