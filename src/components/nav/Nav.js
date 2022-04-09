import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookBookmark} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'

const Nav = () => {

  const [active,setActive] = React.useState('#');
  return (
    <nav>
      <a href="#" onClick={()=>{setActive('#')}} className={active === '#' ? 'active':''}><AiOutlineHome></AiOutlineHome></a>
      <a href="#about" onClick={()=>{setActive('#about')}} className={active === '#about' ? 'active':''}><AiOutlineUser></AiOutlineUser></a>
      <a href="#experience" onClick={()=>{setActive('#experience')}} className={active === '#experience' ? 'active':''}><BiBookBookmark></BiBookBookmark></a>
      <a href="#services" onClick={()=>{setActive('#services')}} className={active === '#services' ? 'active':''}><RiServiceLine></RiServiceLine></a>
      <a href="#contact" onClick={()=>{setActive('#contact')}} className={active === '#contact' ? 'active':''}><BiMessageSquareDetail></BiMessageSquareDetail></a>
    </nav>
  )
}

export default Nav