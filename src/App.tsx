import Cart from './customer/components/cart/Cart'
import Checkout from './customer/components/checkout/Checkout'
import Footer from './customer/components/footer/Footer'
import Navbar from './customer/components/navigation/Navbar'
import Product from './customer/components/product/Product'
import ProductDetails from './customer/components/productDetails/ProductDetails'
import Home from './customer/pages/Home'

function App() {
 

  return (
 <div className=''>
  <Navbar />
  <div>
    <Home />
    <Product />
    <ProductDetails />
    <Cart />
    <Checkout />
  </div>
  <div>
    <Footer />
  </div>
 </div>
      
  )
}

export default App
