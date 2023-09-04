
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [count, setCount] = useState(0);
  function handleChange(e){
    let value = e.target.value;
    setCount((prev) =>(prev + parseInt(value)));
  }
  return (
    <div id="main">
        <h1>Sum Calculator</h1>
        <input type="number" onChange={handleChange} />
        <p>Sum: {count}</p>
    </div>
  )
}

export default App
