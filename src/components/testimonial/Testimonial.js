import React from 'react'
import './Testimonial.css'
import data from './data'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination'
import { Pagination } from 'swiper';
const Testimonial = () => {
  return (
    <section id='testimonials'>
        <h5>My believes</h5>
        <h2>Quotes</h2>

        <Swiper className='container testimonials__container'
          
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}

        >
          
          {
            data.map(({id,avatar,saying,name})=>{
              return (
              <SwiperSlide className='testimonials' key={id}>
                  <div className="client__avatar">
                      <img src={avatar} alt="not found" />
                  </div>
                  <h5 className='client__name'>{name}</h5>
                  <small className='client__review'>{saying}</small>
                </SwiperSlide>);
            })
          }
        </Swiper>
    </section>
  )
}

export default Testimonial