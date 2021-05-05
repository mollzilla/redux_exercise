import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { ACTIONS } from "../actions.js";


import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Cart = ({ puppies, total, dispatch }) => {
  return (
    <>
      <List style={{ width: "60%", margin: "0 auto" }}>
        {puppies.map((puppy, i) => (
          <>
            <ListItem button>
              <ListItemText primary={puppy.name} />
              <img src={puppy.img} alt="puppy look!" />

              <ExpandLessIcon
                fontSize="large"
                onClick={() => console.log("click!")}
              />

              <ExpandMoreIcon
                fontSize="large"
                onClick={() => console.log("click!")}
              />
              <Button variant="contained" color="primary">
                Remove
              </Button>
            </ListItem>
            {i < puppies.length && <Divider />}
          </>
        ))}
      </List>
      <h2 style={{ textAlign: "center", margin: "30px auto" }}>
        Total medical expenses = {total}{" "}
      </h2>
      <Button
        onClick={() => dispatch({ type: ACTIONS.CLEAR_CART})}
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
