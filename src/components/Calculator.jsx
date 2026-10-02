import { useState, useEffect } from "react";
import Display from "./Display";
import Button from "./Button";

export default function Calculator() {
  const [current, setCurrent] = useState("0");
  const [previous, setPrevious] = useState(null);
  const [operator, setOperator] = useState(null);
  const [overwrite, setOverwrite] = useState(false);
  const [error, setError] = useState("");

  const compute = (a, b, op) => {
    const x = parseFloat(a);
    const y = parseFloat(b);
    switch (op) {
      case "+":
        return x + y;
      case "−":
        return x - y;
      case "×":
        return x * y;
      case "÷":
        if (y === 0) return null;
        return x / y;
      default:
        return y;
    }
  };

  const format = (n) => String(parseFloat(n.toPrecision(12)));

  const handleNumber = (digit) => {
    if (error) return;
    if (overwrite) {
      setCurrent(digit);
      setOverwrite(false);
    } else {
      setCurrent((c) => (c === "0" ? digit : c + digit));
    }
  };

  const handleDecimal = () => {
    if (error) return;
    if (overwrite) {
      setCurrent("0.");
      setOverwrite(false);
    } else if (!current.includes(".")) {
      setCurrent((c) => c + ".");
    }
  };

  const handleOperator = (op) => {
    if (error) return;
    if (previous !== null && operator && !overwrite) {
      const result = compute(previous, current, operator);
      if (result === null) {
        setError("Cannot divide by zero");
        return;
      }
      setPrevious(format(result));
      setCurrent(format(result));
    } else {
      setPrevious(current);
    }
    setOperator(op);
    setOverwrite(true);
  };

  const handleEquals = () => {
    if (error || previous === null || !operator) return;
    const result = compute(previous, current, operator);
    if (result === null) {
      setError("Cannot divide by zero");
      return;
    }
    setCurrent(format(result));
    setPrevious(null);
    setOperator(null);
    setOverwrite(true);
  };

  const handleClear = () => {
    setCurrent("0");
    setPrevious(null);
    setOperator(null);
    setOverwrite(false);
    setError("");
  };

  const handleBackspace = () => {
    if (error || overwrite) return;
    setCurrent((c) => (c.length > 1 ? c.slice(0, -1) : "0"));
  };

  // Keyboard support
  useEffect(() => {
    const onKeyDown = (e) => {
      if (/^[0-9]$/.test(e.key)) handleNumber(e.key);
      else if (e.key === ".") handleDecimal();
      else if (e.key === "+") handleOperator("+");
      else if (e.key === "-") handleOperator("−");
      else if (e.key === "*") handleOperator("×");
      else if (e.key === "/") {
        e.preventDefault();
        handleOperator("÷");
      } else if (e.key === "Enter" || e.key === "=") {
        e.preventDefault();
        handleEquals();
      } else if (e.key === "Backspace") handleBackspace();
      else if (e.key === "Escape") handleClear();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  const expression = previous !== null && operator ? `${previous} ${operator}${overwrite ? "" : " " + current}` : "";

  return (
    <section
      aria-label="Calculator"
      className="bg-slate-700 rounded-2xl p-5 shadow-2xl w-full max-w-sm"
    >
      <Display expression={expression} value={current} error={error} />

      <div className="grid grid-cols-4 gap-2">
        <Button label="C" variant="clear" onClick={handleClear} />
        <Button label="⌫" variant="operator" onClick={handleBackspace} />
        <Button label="÷" variant="operator" onClick={() => handleOperator("÷")} />
        <Button label="×" variant="operator" onClick={() => handleOperator("×")} />

        <Button label="7" onClick={() => handleNumber("7")} />
        <Button label="8" onClick={() => handleNumber("8")} />
        <Button label="9" onClick={() => handleNumber("9")} />
        <Button label="−" variant="operator" onClick={() => handleOperator("−")} />

        <Button label="4" onClick={() => handleNumber("4")} />
        <Button label="5" onClick={() => handleNumber("5")} />
        <Button label="6" onClick={() => handleNumber("6")} />
        <Button label="+" variant="operator" onClick={() => handleOperator("+")} />

        <Button label="1" onClick={() => handleNumber("1")} />
        <Button label="2" onClick={() => handleNumber("2")} />
        <Button label="3" onClick={() => handleNumber("3")} />
        <Button label="=" variant="equals" className="row-span-2" onClick={handleEquals} />

        <Button label="0" className="col-span-2" onClick={() => handleNumber("0")} />
        <Button label="." onClick={handleDecimal} />
      </div>
    </section>
  );
}