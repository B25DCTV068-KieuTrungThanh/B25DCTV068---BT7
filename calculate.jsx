export default function calculate(expression) {
  if (expression === "") return "";

  const tokens = [];
  let number = "";
  for (const ch of expression) {
    const isOperator = "+-×÷".includes(ch);
    if (isOperator && number !== "") {
      tokens.push(Number(number));
      tokens.push(ch);
      number = "";
    } else {
      number += ch; 
    }
  }
  if (number !== "") {
    tokens.push(Number(number));
  } else {
    tokens.pop();
  }

  const rest = [tokens[0]];
  for (let i = 1; i < tokens.length; i += 2) {
    const op = tokens[i];
    const next = tokens[i + 1];
    if (op === "×") {
      rest[rest.length - 1] = rest[rest.length - 1] * next;
    } else if (op === "÷") {
      rest[rest.length - 1] = rest[rest.length - 1] / next;
    } else {
      rest.push(op, next);
    }
  }

  let result = rest[0];
  for (let i = 1; i < rest.length; i += 2) {
    if (rest[i] === "+") {
      result = result + rest[i + 1];
    } else {
      result = result - rest[i + 1];
    }
  }
  
  if (!Number.isFinite(result)) return "Lỗi";

  return String(Math.round(result * 1e10) / 1e10);
}

function Display({ value }) {
  return <div className="display">{value === "" ? "0" : value}</div>;
}

export default Display;

function Button({ label, color, onClick }) {
  return (
    <button
      className="btn"
      style={{ backgroundColor: color }}
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
}

export default Button;
