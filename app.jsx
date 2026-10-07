import { useState } from "react";
import Display from "./components/Display";
import Button from "./components/Button";
import calculate from "./calculate";
import "./App.css";

const buttons = [
  { label: "Clear", color: "#ef6c00" },
  { label: "Delete", color: "#ef6c00" },
  { label: ".", color: "#43a047" },
  { label: "÷", color: "#2e7d32" },
  { label: "7", color: "#43a047" },
  { label: "8", color: "#43a047" },
  { label: "9", color: "#43a047" },
  { label: "×", color: "#2e7d32" },
  { label: "4", color: "#43a047" },
  { label: "5", color: "#43a047" },
  { label: "6", color: "#43a047" },
  { label: "-", color: "#2e7d32" },
  { label: "1", color: "#43a047" },
  { label: "2", color: "#43a047" },
  { label: "3", color: "#43a047" },
  { label: "+", color: "#2e7d32" },
  { label: "0", color: "#43a047" },
  { label: "=", color: "#1565c0" },
];

const operators = ["+", "-", "×", "÷"];

export default function App() {
  const [expression, setExpression] = useState("");

  function handleClick(label) {
    const current = expression === "Lỗi" ? "" : expression;

    if (label === "Clear") {
      setExpression("");
    } else if (label === "Delete") {
      setExpression(current.slice(0, -1));
    } else if (label === "=") {
      setExpression(calculate(current));
    } else if (operators.includes(label)) {
      if (current === "") return;
      const last = current.slice(-1);
      if (operators.includes(last)) {
        setExpression(current.slice(0, -1) + label);
      } else {
        setExpression(current + label);
      }
    } else {
      setExpression(current + label);
    }
  }

  return (
    <div className="calculator">
      <Display value={expression} />
      <div className="buttons">
        {buttons.map((b) => (
          <Button
            key={b.label}
            label={b.label}
            color={b.color}
            onClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
          }
