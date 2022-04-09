import React from 'react'
import './Portfolio.css'
import data from './data'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
       {
         data.map((data)=>{
           const {id,img,title,name,github,demo} = data;
           return(
            <article className='portfolio__item' key={id}>
          <div className='portfolio__item-image'>
            <img src={img} alt="not found" />
          </div>
          <h3>{title}</h3>
         <div className='portfolio__item-cta'>
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live demo</a>
         </div>
        </article>
           );
         })
       }
      </div>
    </section>
  )
}

export default Portfolio