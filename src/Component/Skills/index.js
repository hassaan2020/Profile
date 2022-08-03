import React from 'react'
import './styles.css'

const Skills = () => {
  return (
    <div className='skillsPage'>
        <div className='mySkills'>
          <h1>MY SKILLS</h1>

          <div className='flexProgress'>
            <div className='progressBar'>
              <label for="file">HTML</label><br/>
              <progress id="file" value="95" max="100"></progress>
            </div>
            
            <div className='progressBar'>
              <label for="file">CSS</label><br/>
              <progress id="file" value="90" max="100"></progress>
            </div>
          </div>
          <div className='flexProgress'>
            <div className='progressBar'>
              <label for="file">JAVASCRIPT</label><br/>
              <progress id="file" value="80" max="100"></progress>
            </div>
            
            <div className='progressBar'>
              <label for="file">REACT</label><br/>
              <progress id="file" value="70" max="100"></progress>
            </div>
          </div>

          <div className='flexProgress'>
            <div className='progressBar'>
              <label for="file">BOOTSTRAP</label><br/>
              <progress id="file" value="85" max="100"></progress>
            </div>
            
            <div className='progressBar'>
              <label for="file">UX/UI</label><br/>
              <progress id="file" value="80" max="100"></progress>
            </div>
          </div>

          <div className='flexProgress'>
            <div className='progressBar'>
              <label for="file">TYPE SCRIPT</label><br/>
              <progress id="file" value="75" max="100"></progress>
            </div>
            
            <div className='progressBar'>
              <label for="file">RESPONSIVE DESIGN</label><br/>
              <progress id="file" value="85" max="100"></progress>
            </div>
          </div>
          
        </div>
    </div>
  )
}
export default  Skills