import React, { useState } from 'react';

function App() {
  const [pepperoniIsChecked, setPepperoniIsChecked] = useState(false);

  function togglePepperoni(e) {
    setPepperoniIsChecked(e.target.checked);
  }

  return (
    <div className="container">
      <h1>Select Pizza Toppings</h1>
      <div className="checkbox-container">
        <input
          type="checkbox"
          id="pepperoni"
          checked={pepperoniIsChecked}
          aria-checked={pepperoniIsChecked}
          onChange={togglePepperoni}
        />
        <label htmlFor="pepperoni">Add pepperoni</label>
      </div>

      <h2>Your Toppings:</h2>
      <ul className="toppings-list">
        <li>Cheese</li>
        {pepperoniIsChecked && <li>Pepperoni</li>}
      </ul>
    </div>
  );
}

export default App;
