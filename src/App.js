import { React, useState } from "react";
import { createStore } from "redux";
import NavBar from "./components/NavBar";
import CartContainer from "./components/CartContainer";
import { puppies } from "./puppies.js";
import { ACTIONS } from "./actions.js";
import reducer from "./reducer";

import { Provider } from "react-redux";

const initialStore = {
  cart: puppies,
  total: 0,
  amount: 5
};


const store = createStore(reducer, initialStore);
function App() {
  const [selectedPuppies, setSelectedPuppies] = useState([puppies[0], puppies[1]]);

  console.log(puppies)
  return (
    <Provider store={store}>
      <NavBar />
      <header className="App-header">
        
        <h1>Adopt a puppy or two</h1>
      </header>

      <CartContainer cart={selectedPuppies} />
    </Provider>
  );
}

export default App;
