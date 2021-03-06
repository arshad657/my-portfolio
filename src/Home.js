import React, { useEffect } from 'react'
import './Home.css';
import {gsap} from 'gsap'
  
function Home() {

  
  useEffect(() => {
    gsap.from(['.items'], {
      stagger: 0.3,
      delay: 6,
      duration: 3,
      y: 50,
      ease: 'Expo.easeInOut',
      opacity: 0
    }) 
  },[])
  useEffect(() => {
    gsap.from(['.pic'], {
      stagger: 0.3,
      delay: 1,
      duration: 3,
      y: 0,
      ease: 'Expo.easeInOut',
      opacity: 1
    }) 
  },[])
  
    
  
  

    return (
    
      <div className='home-des'>
      
      <h1 className='items'>I AM ARSHAD. I AM A</h1>
      <img src="images/mern.png" alt="" className='items mern-pic'/>
      <h1 className='items'>STACK DEVELOPER</h1>
      
      
      
      <a href='https://drive.google.com/file/d/1ju14zAfKIWiaaD7anrVW_JhrUEEovQXS/view' className='cv-btn items' target="_blank">My CV</a>
      
      <br />
      <div className='arrow mt-5 pt-5 d-flex flex-column items'>
                <i class="fas fa-angle-down "></i>
                <i class="fas fa-angle-down "></i>
                </div>
      
      </div>
      
    )
}

export default Home
