import { useEffect } from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../State/Auth/hooks";
import { getCart } from "../../../State/Cart/Action";
import { useSelector } from "react-redux";

const Cart = () => {

  const navigate = useNavigate();
  const {cart} = useSelector((store:any)=>store);
  const dispatch = useAppDispatch();

  const handleCheckout=()=>{
    navigate("/checkout?step=2")
  }

  useEffect(()=>{
    dispatch(getCart())
  },[cart.updateCartItem, cart.deleteCartItem])


  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16">
        <div className="col-span-2">
        {cart.cart?.cartItems
  .slice() // Realiza una copia para no modificar el estado original
  .sort((itemA:any, itemB:any) => itemA.id - itemB.id)
  .map((item: any) => (
    <CartItem key={item.id} item={item} />
  ))}
        </div>
        <div className="px-5 h-[100vh] mt-4">
          <div className="border">
            <p className="uppercase font-bold opacity-50 pb-4">Price details</p>
            <hr />
            <div className="space-y-1 font-semibold ml-1 mr-1 mb-4">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>${cart.cart?.totalPrice}</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Discount</span>
                <span className="text-green-600">${cart.cart?.discounted}</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Delivery Charge</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Total</span>
                <span className="text-green-600 text-lg">{cart.cart?.totalDiscountedPrice}</span>
              </div>
            </div>
            <Button
            onClick={handleCheckout}
              variant="contained"
              sx={{ px: "2rem", py: "1rem", bgcolor: "#9155fd" }}
              className="w-full mt-5"
            >
              CHECKOUT
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
