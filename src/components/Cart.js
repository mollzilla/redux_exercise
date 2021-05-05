import React from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import CartItem from "./CartItem";
import { ACTIONS } from "../actions.js";
import { connect } from "react-redux";



const Cart = ({ puppies, total, dispatch }) => {
  return (
    <>
      <List style={{ width: "60%", margin: "0 auto" }}>
        {puppies.map((puppy, i) => (
          <>
            <CartItem {...puppy} key={puppy.id} />
            {i < puppies.length && <Divider />}
          </>
        ))}
      </List>
      <h2 style={{ textAlign: "center", margin: "30px auto" }}>
        Total medical expenses = {total}{" "}
      </h2>
      <Button
        onClick={() => dispatch({ type: ACTIONS.CLEAR_CART })}
        variant="contained"
        color="primary"
        style={{ display: "block", margin: "0 auto" }}
      >
        Empty Litter
      </Button>
    </>
  );
};

export default Cart;
