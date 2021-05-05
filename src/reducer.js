import { ACTIONS } from "./actions.js";

function reducer(state, action) {
  let tempCart = [];
  switch (action.type) {
    case ACTIONS.DECREASE:
      if (action.payload.amount === 1) {
        tempCart = state.cart.filter((item) => item.id !== action.payload.id);
      } else {
        tempCart = state.cart.map((item) => {
          if (item.id === action.payload.id)
            item = { ...item, amount: item.amount - 1 };

          return item;
        });
      }

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
    // case ACTIONS.TOGGLE_AMOUNT:
    //   return { ...state };
    case ACTIONS.GET_TOTAL:
      console.log("get total");

      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          let { price, amount } = cartItem;

          const itemTotal = price * amount;

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
