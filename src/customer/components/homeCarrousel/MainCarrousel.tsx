import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { homeCarouselData } from './MainCarrouselData';



const items = homeCarouselData.map((item)=>
<img className='cursor-pointer' onClick={()=>{}} alt='' src={item.imageUrl} role='presentation'/>
)

const MainCarousel = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={4000}
        controlsStrategy="alternate"
        infinite
    />
);

export default MainCarousel;