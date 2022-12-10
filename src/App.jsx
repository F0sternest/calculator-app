import { useState } from "react";

function App() {
    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");

    const ops = ["/", "*", "+", "-", "."];

    const updateCalc = (value) => {
        if (
            (ops.includes(value) && calc === "") ||
            (ops.includes(value) && ops.includes(calc.slice(-1)))
        ) {
            return;
        }

        setCalc(calc + value);

        if (!ops.includes(value)) {
            setResult(eval(calc + value).toString());
        }
    };

    const createDigit = () => {
        const digits = [];

        for (let i = 1; i < 10; i++) {
            digits.push(
                <button key={i} onClick={() => updateCalc(i.toString())}>
                    {i}
                </button>
            );
        }

        return digits;
    };

    const calculate = () => {
        setCalc(eval(calc).toString());
    };

    const deleteDigit = () => {
        if (calc == "") {
            return;
        }
        const value = calc.slice(0, -1);

        setCalc(value);
    };

    return (
        <div className="App">
            <div className="calculator">
                <div className="display">
                    {result ? <span>({result})</span> : ""} {calc || "0"}
                </div>

                <div className="operators">
                    <button onClick={() => updateCalc("/")}>/</button>
                    <button onClick={() => updateCalc("*")}>*</button>
                    <button onClick={() => updateCalc("+")}>+</button>
                    <button onClick={() => updateCalc("-")}>-</button>

                    <button onClick={() => deleteDigit()}>DEL</button>
                </div>
                <div className="digits">
                    {createDigit()}
                    <button onClick={() => updateCalc("0")}>0</button>
                    <button onClick={() => updateCalc(".")}>.</button>
                    <button onClick={() => calculate()}> = </button>
                </div>
            </div>
        </div>
    );
}

export default App;
