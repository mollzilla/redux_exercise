import { React, useState } from "react";
import NavBar from "./NavBar";
import Cart from "./Cart";
import { connect } from "react-redux";
import { actions } from "../actions.js";


function CartContainer({ cart = [], total, dispatch }) {

  if(cart.length===0)
    return(
      <div><h2>Your litter is empty</h2></div>
    );

  return (
    <div>
      <Cart puppies={cart} total={total} dispatch={dispatch} />
    </div>
  );
}

const mapStateToProps = store => {
  const { cart, total } = store;

  return {
    cart, total
  };
};

export default connect(mapStateToProps)(CartContainer);
