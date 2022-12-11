import React from 'react'
import Slider from 'react-slick'
import '../css/componentcss/Home.css'
import SliderHome from './Slider'

const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='container d_flex'>
      
          <SliderHome/>
        </div>
      </section>
    </>
  )
}

export default Home