import React from 'react'
import'./styles.css'
import pic from '.././imgs/h9.jpg'

const Experience = () => {
  return (
    <div className='experPage'>
        <div className='myExper'>
        <h1>EXPERIENCE</h1>
        <h2>Front end developer</h2>
        <h4>Mar 2016 - Present</h4>
        <p>Web design, Front end development, UX/UI design,
        Responsive design, 3D Modeling, Graphics design.</p>
          <a target='blank' href='https://www.upwork.com/freelancers/~01115fdffbccd7e0e8'>Read more</a>
      </div>
      <div className='image'>
        <img src={pic}/>
      </div>
    </div>
  )
}
export default  Experience