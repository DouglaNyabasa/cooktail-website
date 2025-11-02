import gsap from 'gsap';
import React from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';




gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
   <main>
    <Navbar/>
    <Hero/>
    <div className="h-dvh bg-black"></div>
   </main>
  )
}

export default App
 