import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Cart = ({ puppies }) => {
  return (
    <List>
      {puppies.map((puppy, i) => (
        <>
          <ListItem button>
            <ListItemText primary={puppy.name} />
            <img src={puppy.img} alt="puppy look!" />

            <ExpandLessIcon fontSize="large" onClick={() => console.log("click!")} />
            <ExpandMoreIcon fontSize="large" onClick={() => console.log("click!")} />
          </ListItem>
          {i < puppies.length && <Divider />}
        </>
      ))}
    </List>
  );
};

export default Cart;