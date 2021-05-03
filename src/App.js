import { React, useState } from "react";
import Layout from "./components/Layout";
import Cart from "./components/Cart";
import { puppies } from "./puppies.js";


function App() {
  const [selectedPuppies, setSelectedPuppies] = useState([puppies[0], puppies[1]]);



  console.log(puppies)
  return (
    <div className="App">
      <Layout />
      <header className="App-header">
        
        <h1>Adopt a puppy or two</h1>
      </header>

      <Cart puppies={selectedPuppies} />
    </div>
  );
}

export default App;
