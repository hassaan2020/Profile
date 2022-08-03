import React from 'react'
import'./styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF,faLinkedinIn,faInstagram,faGithub} from '@fortawesome/free-brands-svg-icons'
import pic from '.././imgs/p3.png'

const Header = () => {
  return (
    <div className='header'>
      <div className='imProf'>
        <img src={pic} />
      </div>
      <h4>Hassaan Nabil</h4>

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
    </div>
  )
}
export default  Header