import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouse,faUser,faCode,faTrophy,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faFacebookF,faLinkedinIn,faInstagram,faGithub} from '@fortawesome/free-brands-svg-icons'
import { Link,NavLink } from 'react-router-dom'
import './styles.css'
import pic from '.././imgs/p3.png'


const Navbar = () => {
  return (
    <div className='nav'>
      <div className='imProf'>
        <img src={pic} />
      </div>
      <h2 className='myName'>Hassaan Nabil</h2>

    <div className='socialLinks'>
      <a target='blank' href='https://www.facebook.com/Hassaan202020'>
        <FontAwesomeIcon className='i' icon={faFacebookF}></FontAwesomeIcon>
      </a>
      <a target='blank' href='https://www.linkedin.com/in/hassaan-nabil-5b95a31a4/'>
        <FontAwesomeIcon className='i' icon={faLinkedinIn}></FontAwesomeIcon>
      </a>
      <a target='blank' href='https://www.instagram.com/7assaan1998/'>
        <FontAwesomeIcon className='i' icon={faInstagram}></FontAwesomeIcon>
      </a>
      <a target='blank' href='https://github.com/hassaan2020/'>
        <FontAwesomeIcon className='i' icon={faGithub}></FontAwesomeIcon>
      </a>
    </div>

    <br/>
    <br/>

        <NavLink to='/' className='NavLink'>
          <div className='links'>
              <FontAwesomeIcon className='i' icon={faHouse}></FontAwesomeIcon>
            <span>Home</span> 
            </div>
        </NavLink>

        <NavLink to='/About' className='NavLink'>
          <div className='links'>
              <FontAwesomeIcon className='i' icon={faUser}></FontAwesomeIcon>
              <span>About </span>
            </div>
        </NavLink>

        <NavLink to='/Skills' className='NavLink'>
          <div className='links'>
              <FontAwesomeIcon className='i' icon={faCode}></FontAwesomeIcon>
              <span>Skills</span> 
            </div>
        </NavLink>

        <NavLink to='/Works' className='NavLink'>
          <div className='links'>
              <FontAwesomeIcon className='i' icon={faTrophy}></FontAwesomeIcon>
              <span>My Works </span>
            </div>
        </NavLink>

        <NavLink to='/Contact' className='NavLink'>
          <div className='links'>
              <FontAwesomeIcon className='i' icon={faEnvelope}></FontAwesomeIcon>
              <span> Contact</span> 
            </div>
        </NavLink>
    </div>
  )
}
export default  Navbar