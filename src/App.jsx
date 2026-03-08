import "./App.css";
import { useState } from "react";
import Display from "./components/Display";
import ButtonPanel from "./components/ButtonPanel/ButtonPanel";

function App() {
  const [currentValue, setCurrentValue] = useState("0");

  const handleNumberClick = (num) => {
    setCurrentValue((prev) => (prev === "0" ? num : prev + num));
  };

  return (
    <>
      <Display currentValue={currentValue} />
      <ButtonPanel onNumberClick={handleNumberClick} />
    </>
  );
}

export default App;
