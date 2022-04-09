import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'
const headerSocials = () => {
  return (
    <div className='header__socails'>
        <a href="https://www.linkedin.com/in/ouwais-zlaigi-b722621b0/" target="_blank"><BsLinkedin></BsLinkedin></a>
        <a href="https://github.com/ouwais1922" target="_blank"><FaGithub></FaGithub></a>
        <a href="https://dribbble.com/" target="_blank"><FiDribbble></FiDribbble></a>
    </div>
  )
}

export default headerSocials