import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Service from './components/services/Service'
import Portfolio from './components/portfolio/Portfolio'
import Testimonial from './components/testimonial/Testimonial'
import Contact from './components/contact/Contact'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <>
        <Header></Header>
        <Nav></Nav>
        <About></About>
        <Experience></Experience>
        <Portfolio></Portfolio>
        <Testimonial></Testimonial>
        <Contact></Contact>
    </>
  )
}

export default App