import React, { useEffect } from 'react'
import Adresscard from '../adresscard/Adresscard'
import { Button } from '@mui/material'
import CartItem from '../cart/CartItem'
import { useAppDispatch } from '../../../State/Auth/hooks'
import { getOrderById } from '../../../State/Order/Action'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { createPayment } from '../../../State/Payment/Action'

const OrderSummary = () => {
const dispatch = useAppDispatch();
const location = useLocation();
const {order} = useSelector((store:any)=>store)
const searchParams = new URLSearchParams(location.search);
const orderId = searchParams.get("order_id");


useEffect(()=>{
  dispatch(getOrderById(orderId))
  console.log("la orden id es: ", orderId)
  console.log("10. la direccion es: " , order.order?.shippingAddress)
},[orderId])

const handleCheckout=()=>{
  dispatch(createPayment(orderId))
}

//console.log("9. la ORDEN ES: ", order)
  return (

    <div>
    <div className='p-5 shadow-lg rounded-s-md border text-start'>
      <Adresscard address={order.order?.shippingAddress}/>

    </div>
    <div>
      <div className="lg:grid grid-cols-3 ">
        <div className="col-span-2">
          {order.order?.orderItems.map((item:any)=>(
            <CartItem
            item={item}
            key={item.id}
            />

          ))}
        </div>
        <div className="px-5 h-[100vh] mt-4">
          <div className="border">
            <p className="uppercase font-bold opacity-50 pb-4">Price details</p>
            <hr />
            <div className="space-y-1 font-semibold ml-1 mr-1 mb-4">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>${order.order?.totalPrice}</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Discount</span>
                <span className="text-green-600">${order.order?.discount}</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Delivery Charge</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Total</span>
                <span className="text-green-600 text-lg">${order.order?.totalDiscountedPrice}</span>
              </div>
            </div>
            <Button
              variant="contained"
              sx={{ px: "2rem", py: "1rem", bgcolor: "#9155fd" }}
              className="w-full mt-5"
              onClick={handleCheckout}
            >
              CHECKOUT
            </Button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default OrderSummary