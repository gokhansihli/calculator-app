export default function Button({ label, onClick }) {
  let className = "";

  if (["+", "-", "X", "÷", "="].includes(label)) {
    className = "operator";
  } else if (["C"].includes(label)) {
    className = "special";
  } else if (label === "0") {
    className = "zero";
  }

  return (
    <button
      className={className}
      onClick={() => {
        onClick(label);
      }}
    >
      {label}
    </button>
  );
}
