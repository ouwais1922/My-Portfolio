import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skills I have?</h5>
      <h2>My experience</h2>

      <div className='container experience__conatiner'>
         <div className="experience__cybersecurity">
          <h3>CyberSecurity</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'></BsPatchCheckFill>
              <h4>Burp Suite</h4>
              <small className='text-light'>Intermidiate</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'></BsPatchCheckFill>
              <h4>Malware</h4>
              <small className='text-light'>Intermidiate</small>
            </article>

             <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'></BsPatchCheckFill>
              <h4>Nmap</h4>
              <small className='text-light'>Intermidiate</small>
            </article>

             <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'></BsPatchCheckFill>
              <h4>Phishing</h4>
              <small className='text-light'>Intermidiate</small>
            </article>

             <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'></BsPatchCheckFill>
              <h4>Pentesting</h4>
              <small className='text-light'>Intermidiate</small>
            </article>

             <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'></BsPatchCheckFill>
              <h4>Cryptography</h4>
              <small className='text-light'>Intermidiate</small>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'></BsPatchCheckFill>
              <h4>Nodejs</h4>
              <small className='text-light'>Experienced</small>
            </article>

             <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'></BsPatchCheckFill>
              <h4>Mongodb</h4>
              <small className='text-light'>Experienced</small>
            </article>

             <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'></BsPatchCheckFill>
              <h4>PHP</h4>
              <small className='text-light'>Intermidiate</small>
            </article>

             <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'></BsPatchCheckFill>
              <h4>Laravel</h4>
              <small className='text-light'>Intermidiate</small>
            </article>

             <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'></BsPatchCheckFill>
              <h4>Express</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'></BsPatchCheckFill>
              <h4>Java</h4>
              <small className='text-light'>Experienced</small>
            </article>
          </div>
        </div>
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'></BsPatchCheckFill>
              <h4>HTML</h4>
              <small className='text-light'>Intermidiate</small>
            </article>

             <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'></BsPatchCheckFill>
              <h4>CSS</h4>
              <small className='text-light'>Intermidiate</small>
            </article>

             <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'></BsPatchCheckFill>
              <h4>JS</h4>
              <small className='text-light'>Experienced</small>
            </article>

             <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'></BsPatchCheckFill>
              <h4>Bootstrap</h4>
              <small className='text-light'>Intermidiate</small>
            </article>

             <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'></BsPatchCheckFill>
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'></BsPatchCheckFill>
              <h4>VueJs</h4>
              <small className='text-light'>Experienced</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience