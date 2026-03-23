import "./App.css";
import { useState } from "react";
import Display from "./components/Display";
import ButtonPanel from "./components/ButtonPanel/ButtonPanel";

function App() {
  const [currentValue, setCurrentValue] = useState("0");
  const [operator, setOperator] = useState(null);
  const [prevValue, setPrevValue] = useState(null);

  const handleNumberClick = (num) => {
    setCurrentValue((prev) => (prev === "0" ? num : prev + num));
  };

  const handleOperatorClick = (op) => {
    setPrevValue(currentValue);
    setCurrentValue("0");
    setOperator(op);
  };

  const handleEqualsClick = () => {
    if (!operator || prevValue === null) return;

    const prev = Number(prevValue);
    const curr = Number(currentValue);

    let result = 0;

    if (operator === "+") result = prev + curr;
    if (operator === "-") result = prev - curr;
    if (operator === "X") result = prev * curr;
    if (operator === "÷") result = prev / curr;

    setCurrentValue(result.toString());
    setPrevValue(null);
    setOperator(null);
  };

  const handleClearClick = () => {
    setCurrentValue("0");
    setPrevValue(null);
    setOperator(null);
  };

  return (
    <div className="calculator">
      <Display currentValue={currentValue} />
      <ButtonPanel
        onNumberClick={handleNumberClick}
        onOperatorClick={handleOperatorClick}
        onEqualsClick={handleEqualsClick}
        onClearClick={handleClearClick}
      />
    </div>
  );
}

export default App;
