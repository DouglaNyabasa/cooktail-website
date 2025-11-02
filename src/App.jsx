import gsap from 'gsap';
import React from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all';




gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className='flex-center'>
      <h1 className='text-green-200'>hie</h1>
    </div>
  )
}

export default App
 