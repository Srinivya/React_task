import React, { useState } from "react";

const Onchange = () => {
  const [name, setName] = useState("Nivya");
  const [color, setColor] = useState("black");

  function nameChange(event) {
    setName(event.target.value);
  }
  function changeColor(event) {
    setColor(event.target.value);
  }
  return (
    <div>
      <input value={name} onChange={nameChange} />
      <p>Name: {name}</p>

      <h1>Color Picker</h1>
      <h2 style={{ backgroundColor: color }}>background color{color}</h2>
      <h2>Selected color: {color}</h2>

      <input type="color" value={color} onChange={changeColor} />
    </div>
  );
};

export default Onchange;
