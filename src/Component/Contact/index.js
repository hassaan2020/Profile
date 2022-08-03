import React from 'react'
import'./styles.css'
import pic from '.././imgs/h12.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'




const Contact = () => {
  return (
    <div className='contactPage'>
      <div className='contactMe'>
        <h1>CONTACT WITH ME</h1>
        <br/>
        <div className='flexContact'>

          <div className='image'>
            <img src={pic} />
          </div>
          <div className='form'>
            <form>
              <input type='text' placeholder='Name'/>
              <input type='e-mail' placeholder='Mail'/>
              <input type='text' placeholder='Subject'/>
              <textarea></textarea>
              <button>
                Send
                <FontAwesomeIcon className='i' icon={faPaperPlane}></FontAwesomeIcon>
                </button>
            </form>
          </div>
          

        </div>
        
        </div>
    </div>
  )
}
export default  Contact