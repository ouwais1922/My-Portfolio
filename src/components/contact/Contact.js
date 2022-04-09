import React from 'react'
import './Contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {RiMessengerLine} from 'react-icons/ri'
import  { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const form = useRef();
   const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_s5r9rga', 'template_b0uk6xj', form.current, 'D5vknLCmtq5X_34lE')
    e.target.reset();
    alert("message sent successfully")
     
  };

  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className='container contact__container'>
        <div className="contact__options">
            <article className='contact__option'>
              <MdOutlineMail className='contact__option-icon'></MdOutlineMail>
                <h4>Email</h4>
                <h5>O.zlaigi@aui.ma</h5>
                <a href="mailto:O.zlaigi@aui.ma" target="_blank">Email me</a>
            </article>

            <article className='contact__option'>
              <RiMessengerLine className='contact__option-icon'></RiMessengerLine>
                <h4>Messenger</h4>
                <h5>Ouwaiss zlaigi</h5>
                <a href="https://m.me/ouwaiss.zlaigi.96" target="_blank">Messenger me</a>
            </article>

            <article className='contact__option'>
              <BsWhatsapp className='contact__option-icon'></BsWhatsapp>
                <h4>WhatsApp</h4>
                <h5>+212-622894968</h5>
                <a href="https://api.whatsapp.com/send?phone=0622894968" target="_blank">WhatsApp me</a>
            </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full name' required />
          <input type="email" name='email' placeholder='Your Email' required  />
          <textarea name="message"  rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact