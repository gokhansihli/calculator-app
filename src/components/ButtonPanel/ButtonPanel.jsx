import Button from "./Button/Button";

export default function ButtonPanel({
  onNumberClick,
  onOperatorClick,
  onEqualsClick,
  onClearClick,
}) {
  return (
    <div className="button-panel">
      <Button label="7" onClick={onNumberClick} />
      <Button label="8" onClick={onNumberClick} />
      <Button label="9" onClick={onNumberClick} />
      <Button label="÷" onClick={onOperatorClick} />

      <Button label="4" onClick={onNumberClick} />
      <Button label="5" onClick={onNumberClick} />
      <Button label="6" onClick={onNumberClick} />
      <Button label="X" onClick={onOperatorClick} />

      <Button label="1" onClick={onNumberClick} />
      <Button label="2" onClick={onNumberClick} />
      <Button label="3" onClick={onNumberClick} />
      <Button label="-" onClick={onOperatorClick} />

      <Button label="0" onClick={onNumberClick} />
      <Button label="C" onClick={onClearClick} />
      <Button label="=" onClick={onEqualsClick} />
      <Button label="+" onClick={onOperatorClick} />
    </div>
  );
}
