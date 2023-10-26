import Carrousel from '../../components/homeSectionCarrousel/HomeSectionCarrousel'
import MainCarousel from '../../components/homeCarrousel/MainCarrousel'
import { gouns } from '../../Data/gouns'
import { mens_kurta } from '../../Data/men_kurta'

import { useAppDispatch } from '../../../State/Auth/hooks'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { findProductsByCategory } from '../../../State/Product/Action'

const Home = () => {

const dispatch = useAppDispatch();
const {product} = useSelector((store: any)=> store);

useEffect(()=>{
  dispatch(findProductsByCategory('Dress'));
  console.log("trajimos los dress")
  dispatch(findProductsByCategory('top'));
  console.log("trajimos los tops")
  
},[])

//const topProducts = product.products?.filter((p:any) => p.category.name === 'top');

//console.log("tops: ", topProducts);

console.log("productos traidos: ", product.products)
  return (
    <div>
       <MainCarousel />
        <div className='space-y-10 py-10 flex flex-col justify-center px-5 lg:px-10'>
            <Carrousel data={product.products} sectionName='New Arrivals'/>  
            <Carrousel data={mens_kurta} sectionName='Men'/>  
            <Carrousel data={gouns} sectionName='Women' />
        </div>
        
    </div>
  )
}

export default Home