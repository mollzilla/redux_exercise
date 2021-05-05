import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { ACTIONS } from "../actions.js";
import { connect } from "react-redux";

import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const CartItem = ({ name, img }) => {
  return (
    <ListItem button>
      <ListItemText primary={name} />
      <img src={img} alt="puppy look!" />
      
      <ExpandLessIcon fontSize="large" onClick={() => console.log("click!")} />

      <ExpandMoreIcon fontSize="large" onClick={() => console.log("click!")} />
      <Button variant="contained" color="primary">
        Remove
      </Button>
    </ListItem>
  );
};

export default connect()(CartItem);