import React from 'react'
import './About.css'
import Me from '../../assets/fb.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi';
import {VscFolderActive} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>
        <div className='container about_container'>
          <div className="about__me">
            <div className="about_me-image">
              <img src={Me} alt="not found" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward className='about__icon'></FaAward>
                <h5>Experience</h5>
                <small>1 year working</small>
              </article>

              <article className='about__card'>
                <FiUsers className='about__icon'></FiUsers>
                <h5>Clients</h5>
                <small>not your business</small>
              </article>

              <article className='about__card'>
                <VscFolderActive className='about__icon'></VscFolderActive>
                <h5>Projects</h5>
                <small>3+ projects</small>
              </article>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, quae eveniet ab error quam perspiciatis a delectus officiis dolorum, tempora veritatis quo voluptate labore aut similique maxime, fuga culpa eum.</p>
            <a href="#contact" className='btn btn-primary'>Let's talk</a>
          </div>
        </div>
    </section>
  )
}

export default About