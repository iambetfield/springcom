import React from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";

const Cart = () => {
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16">
        <div className="col-span-2">
          {[1,1,1,1].map((item)=>(
            <CartItem />

          ))}
        </div>
        <div className="px-5 h-[100vh] mt-4">
          <div className="border">
            <p className="uppercase font-bold opacity-50 pb-4">Price details</p>
            <hr />
            <div className="space-y-1 font-semibold ml-1 mr-1 mb-4">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>$39383</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Discount</span>
                <span className="text-green-600">$393</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Delivery Charge</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Total</span>
                <span className="text-green-600 text-lg">$39383</span>
              </div>
            </div>
            <Button
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
