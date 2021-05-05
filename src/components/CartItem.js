import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import { ACTIONS } from "../actions.js";
import { connect } from "react-redux";

import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const CartItem = ({
  id,
  name,
  img,
  amount,
  medicalCosts,
  remove,
  increase,
  decrease,
  toggle
}) => {
  const decreaseCase = (amount, toggle) => {
    if (amount === 1) remove();
    else toggle(toggle);
  };

  return (
    <ListItem button>
      <ListItemText primary={name} />
      <div style={{ width: "150px", margin: "0 25px" }}>
        <p>Medical costs for this beauty are ${medicalCosts}</p>
      </div>
      <img src={img} alt="puppy look!" />
      <div style={{ margin: "25px" }}>
        <h3>{amount} puppy units</h3>
        <ExpandLessIcon fontSize="large" onClick={() => toggle("inc")} />

        <ExpandMoreIcon fontSize="large" onClick={() => toggle("dec")} />
        <br />
        <Button onClick={() => remove()} variant="contained" color="primary">
          Remove
        </Button>
      </div>
    </ListItem>
  );
};

// props passed to component
const mapDispatchToProps = (dispatch, ownProps) => {
  const { id, amount } = ownProps;

  return {
    // we must have type, but we can add other values. Common practice is calling it payload.
    remove: () => dispatch({ type: ACTIONS.REMOVE, payload: { id } }),
    increase: () =>
      dispatch({ type: ACTIONS.INCREASE, payload: { id, amount } }),
    decrease: () =>
      dispatch({ type: ACTIONS.DECREASE, payload: { id, amount } }),
    toggle: (toggle) =>
      dispatch({ type: ACTIONS.TOGGLE_AMOUNT, payload: { id, toggle } }),
  };
};

// we  don't need a mapStateToProps because we're getting what we need via props. Bypass first argument
export default connect(null, mapDispatchToProps)(CartItem);
