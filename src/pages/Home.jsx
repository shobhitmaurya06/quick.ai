import React from 'react'
import Navbar from '../components/NavBar';
import Hero from '../components/Hero';
import AiTools from '../components/AiTools';
import Testimonial from '../components/Testimonial';
import Plans from '../components/Plans';
import Footer from '../components/Footer';
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AiTools/>
      <Testimonial/>
      <Plans/>
      <Footer/>
    </div>
  )
}

export default Home;