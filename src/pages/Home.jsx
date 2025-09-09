import React from 'react'
import Hero from '../components/Hero';
import AiTools from '../components/AiTools';
import Testimonial from '../components/Testimonial';
import Plans from '../components/Plans';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
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