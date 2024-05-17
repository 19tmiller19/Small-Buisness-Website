import React from 'react'
import Hero from '../../components/Hero/Hero'
import Services from '../../components/Services/Services'
import Reviews from '../../components/Reviews/Reviews'
import Contact from '../../components/Contact/Contact'
import About from '../../components/About/About'
import Map from '../../components/Map/Map'

const Home = () => {
  return (
    <>
    <Hero/>
    <Services/>
    <Reviews/>
    <About/>
    <Contact/>
    <Map/>

    </>
  )
}

export default Home