import React from 'react'
import'./styles.css'
import pic from '.././imgs/h3.jpg'

const About = () => {
  return (
    <div className='aboutPage'>
      <div className='aboutMe'>
        <h1>ABOUT ME</h1>
        <p>An experienced front end developer and UI/Ux design.
           Capable of continous learn from senior developers while still nuturing junior developers.
            Passionate about learning and development with adesire to apply skills on a larger development.
             Eager to tackle more complex problems and continue to find ways to maximice user effeciency.</p>
      </div>
      <div className='image'>
        <img src={pic}/>
      </div>
    </div>
  )
}
export default  About