import gsap from 'gsap';
import React from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Cocktails from './components/Cocktails/Cocktails';
import About from './components/About/About';
import Art from './components/Art/Art';
import Menu from './components/Menu/Menu';




gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
   <main>
    <Navbar/>
    <Hero/>
    <Cocktails/>
    <About/>
    <Art/>
    <Menu/>
   </main>
  )
}

export default App
 