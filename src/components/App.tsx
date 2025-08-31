// src/App.tsx

import "../App.css";
import "modern-normalize";
import Button from "./button/Button";
import { useState } from "react";

function App() {
  const [click, setClicks] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  interface Value {
    x: number;
    y: number;
  }

  const [value, setValue] = useState<Value>({ x: 0, y: 0 });

  const updateValue = (key: keyof Value) => {
    setValue({ ...value, [key]: value[key] + 1 });
  };

  function handleClick() {
    setClicks(click + 1);
  }

  function handleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="cards">
      <h1>Products</h1>
      <div className="product-card"></div>
      <Button clicks={click} onUpdate={handleClick} />
      <Button clicks={click} onUpdate={handleClick} />
      <button onClick={handleOpen}>{isOpen ? "open" : "closed"}</button>
      <button onClick={() => updateValue("x")}>X: {value.x}</button>
      <button onClick={() => updateValue("y")}>Y: {value.y}</button>
    </div>
  );
}

export default App;
