import Button from "./Button/Button";

export default function ButtonPanel({ onNumberClick }) {
  return (
    <div>
      <Button label="7" onClick={onNumberClick} />
      <Button label="8" onClick={onNumberClick} />
      <Button label="9" onClick={onNumberClick} />
    </div>
  );
}
