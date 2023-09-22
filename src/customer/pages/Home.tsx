import React from 'react'
import Carrousel from '../components/homeSectionCarrousel/HomeSectionCarrousel'
import MainCarousel from '../components/homeCarrousel/MainCarrousel'

const Home = () => {
  return (
    <div>
       <MainCarousel />
        <div className='space-y-10 py-10 flex flex-col justify-center px-5 lg:px-10'>
            <Carrousel />
            <Carrousel />
            <Carrousel />
            <Carrousel />
        </div>
        
    </div>
  )
}

export default Home