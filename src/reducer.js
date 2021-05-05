import { Satellite } from "@material-ui/icons";
import { ACTIONS } from "./actions.js";

function reducer(state, action) {
  let tempCart = [];
  switch (action.type) {
    case ACTIONS.DECREASE:
      tempCart = state.cart.map((item) => {
        if (item.id === action.payload.id)
          item = { ...item, amount: item.amount - 1 };

        return item;
      });

      return { ...state, cart: tempCart };

    case ACTIONS.INCREASE:
      tempCart = state.cart.map((item) => {
        if (item.id === action.payload.id)
          item = { ...item, amount: item.amount + 1 };

        return item;
      });

      return { ...state, cart: tempCart };
    case ACTIONS.REMOVE:
      // can use filter because it returns a new array
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case ACTIONS.CLEAR_CART:
      return { ...state, cart: [] };
    case ACTIONS.TOGGLE_AMOUNT:
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id) {
            if (action.payload.toggle === "inc") {
              item = { ...item, amount: item.amount + 1 };
            } else if (action.payload.toggle === "dec") {
              item = { ...item, amount: item.amount - 1 };
            }
          }
          return item;
        }),
      };

    case ACTIONS.GET_TOTAL:
      console.log("get total");

      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          let { medicalCosts, amount } = cartItem;
          console.log(medicalCosts, amount);

          const itemTotal = medicalCosts * amount;

          cartTotal.total += itemTotal;
          cartTotal.amount += amount;

          return cartTotal;
        },
        { total: 0, amount: 0 }
      );
      total = parseFloat(total.toFixed(2));
      return { ...state, total, amount };
    default:
      return state;
  }
}

export default reducer;
