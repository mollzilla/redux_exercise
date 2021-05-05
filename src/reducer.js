import { ACTIONS } from "./actions.js";

function reducer(state, action) {
  console.log({ state, action });

  switch (action.type) {
    case ACTIONS.DECREASE:
      console.log("decreased");
      return { ...state, count: state.count - 1 };
    case ACTIONS.INCREASE:
      console.log("increased")
      return { ...state, count: state.count + 1 };
    case ACTIONS.REMOVE:
      console.log("removed")
      return { ...state };
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
