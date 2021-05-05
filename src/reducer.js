import { ACTIONS } from "./actions.js";

function reducer(state, action) {
  console.log({ state, action });

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
      console.log("increased");

      tempCart = state.cart.map((item) => {
        if (item.id === action.payload.id)
          item = { ...item, amount: item.amount + 1 };

        return item;
      });

      return { ...state, cart: tempCart };
    case ACTIONS.REMOVE:
      console.log("removed");
      // can use filter because it returns a new array
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case ACTIONS.CLEAR_CART:
      return { ...state, cart: [] };
    // case ACTIONS.GET_AMOUNT:
    //   return { ...state };
    // case ACTIONS.GET_TOTAL:
    //   return { ...state };
    default:
      return state;
  }
}

export default reducer;
