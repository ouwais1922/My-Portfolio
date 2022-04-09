import React from 'react'
import './Header.css'
import Feature from './Feature'
import Me from '../../assets/me.png'
import Social from './headerSocials'
const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h4>Hello I'm</h4>
        <h1>Ouwais, call me Luigi</h1>
        <h5 className='text-light'>Software engineering student</h5>
        <Feature></Feature>
        <Social></Social>
        <div className='me'>
            <img src="" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll down</a>
      </div>
    </header>
  )
}

export default Header