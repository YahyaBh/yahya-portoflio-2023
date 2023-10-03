import React, { useState } from 'react'
import './Hire.scss'
import { RiSendPlaneFill } from 'react-icons/ri'

const Hire = () => {

  const [email, setEmail] = useState('');
  const [full_name, setFullName] = useState('');
  const [message, setMessage] = useState('');



  return (
    <div className="hire_container" id="contact">


      <div className="head_text">
        <h2 className='main_text'>HIRE ME</h2>
        <h2 className='main_text_under'>HIRE ME</h2>
      </div>



      <form>

        <input onChange={e => setEmail(e.target.value)}  type="email" name='email' placeholder='example@email.com' />


        <input onChange={e => setFullName(e.target.value)} className={`${email !== '' ? '' : 'inactive'} `} type="text" name='full_name' placeholder='Full name' />


        <textarea onChange={e => setMessage(e.target.value)} className={`${full_name !== '' ? '' : 'inactive'} `} name="message" id="message" cols="30" rows="10" placeholder='Message'></textarea>

        <button className={`${message !== '' ? '' : 'inactive'} `} type='submit'>SEND MESSAGE <RiSendPlaneFill /></button>

      </form>

    </div>
  )
}

export default Hire