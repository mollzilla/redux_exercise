import { React, useState } from "react";
import NavBar from "./NavBar";
import Cart from "./Cart";
import { puppies } from "../puppies.js";


function CartContainer({cart = []}) {

  if(cart.length===0)
    return(
      <div><h2>Your cart is empty</h2></div>
    );

  return (
    <div>
      <Cart puppies={cart} />
    </div>
  );
}

export default CartContainer;
