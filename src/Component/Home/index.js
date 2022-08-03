import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faLocationDot,faMobileAlt} from '@fortawesome/free-solid-svg-icons'
import pic from '.././imgs/h7.jpg'
import './styles.css'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className='homePage'>
        <div className='welcome'>
          <h2>Hello</h2>
          <h1>I'm Hassaan Nabil</h1>
          <h2>Front end developer</h2>
          <br/>
          <h6>
            <FontAwesomeIcon className='i' icon={faMobileAlt}></FontAwesomeIcon>
            01558225726 - 01117394345
          </h6>
          <h6>
            <FontAwesomeIcon className='i' icon={faLocationDot}></FontAwesomeIcon>
            Egypt, Suhag, Dar El salam
          </h6>
          <h6>
            <FontAwesomeIcon className='i' icon={faEnvelope}></FontAwesomeIcon>
            hassaan6666nabil@gmail.com
          </h6>

          <NavLink to='/Contact'>
              <button>CONTACT ME </button>
          </NavLink>
        </div>

        <div className='imag'>
          <img src={pic}/>
        </div>
    </div>
  )
}
export default  Home