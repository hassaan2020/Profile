import React from 'react'
import'./styles.css'
import data from '../data'
import pic from '../imgs/inf.PNG'


const Experience = () => {

  const showProject = data.projectData.map((el) => {
    return(
      <div className='project'>
        <img src={el.img}/>
        <h2>{el.title}</h2>
        <a target='blank' href={el.link}>live preview</a>
      </div>
    )
  })

  return (
    <div className='experPage'>
        {showProject}
    </div>
  )
}
export default  Experience