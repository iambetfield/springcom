import { Routes, Route, BrowserRouter } from "react-router-dom";
import Cart from "./customer/components/cart/Cart";
import Checkout from "./customer/components/checkout/Checkout";
import Footer from "./customer/components/footer/Footer";
import Navbar from "./customer/components/navigation/Navbar";
import Order from "./customer/components/order/Order";
import OrderDetails from "./customer/components/order/OrderDetails";
import Product from "./customer/components/product/Product";
import ProductDetails from "./customer/components/productDetails/ProductDetails";
import Home from "./customer/components/home/Home";
import PaymentSuccess from "./customer/components/payment/PaymentSuccess";


function App() {
  return (
    <>
     <BrowserRouter>
      <Navbar />
 
      <Routes>
        <Route path="/login" element={<Home />}></Route>
        <Route path="/register" element={<Home />}></Route>

        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/:labelOne/:labelTwo/:labelThree" element={<Product />}></Route>
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/account/order" element={<Order />}></Route>
        <Route path="/account/order/:orderId" element={<OrderDetails />}></Route>
        <Route path="/payment/:orderId" element={<PaymentSuccess />}></Route>
        
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
