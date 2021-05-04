import { React, useState } from "react";
import NavBar from "./components/NavBar";
import CartContainer from "./components/CartContainer";
import { puppies } from "./puppies.js";


function App() {
  const [selectedPuppies, setSelectedPuppies] = useState([puppies[0], puppies[1]]);



  console.log(puppies)
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        
        <h1>Adopt a puppy or two</h1>
      </header>

      <CartContainer cart={selectedPuppies} />
    </div>
  );
}

export default App;
