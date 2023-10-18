import Carrousel from '../../components/homeSectionCarrousel/HomeSectionCarrousel'
import MainCarousel from '../../components/homeCarrousel/MainCarrousel'
import { gouns } from '../../Data/gouns'
import { mens_kurta } from '../../Data/men_kurta'

const Home = () => {
  return (
    <div>
       <MainCarousel />
        <div className='space-y-10 py-10 flex flex-col justify-center px-5 lg:px-10'>
            <Carrousel data={gouns} sectionName='Some Section' />
            <Carrousel data={mens_kurta} sectionName='Hombres'/>  
        </div>
        
    </div>
  )
}

export default Home