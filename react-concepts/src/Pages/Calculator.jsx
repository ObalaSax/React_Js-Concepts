import { useState } from "react";

function Calculator() {
  const [result, setResult] = useState("");

  const handleClick = (event) => {
    const value = event.target.value;

    if (value === "DEL") {
      setResult(result.slice(0, -1));
    } else if (value === "=") {
      try {
        setResult(eval(result));
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "CE") {
      setResult("");
    } else {
      setResult(result + value);
    }
  };

  return (
    <div className="myCacl">
      <div className="calculator">
        <h1 className="calc-title">
          Casio <i>fx 82-MS</i>
        </h1>
        <div className="input-box">
          <input type="text" value={result} readOnly />
        </div>
        <div className="calc-buttons">
          <button onClick={handleClick} value="7">
            7
          </button>
          <button onClick={handleClick} value="8">
            8
          </button>
          <button onClick={handleClick} value="9">
            9
          </button>
          <button onClick={handleClick} value="/" className="opertator">
            /
          </button>
          <button onClick={handleClick} value="4">
            4
          </button>
          <button onClick={handleClick} value="5">
            5
          </button>
          <button onClick={handleClick} value="6">
            6
          </button>
          <button onClick={handleClick} value="*" className="opertator">
            *
          </button>
          <button onClick={handleClick} value="1">
            1
          </button>
          <button onClick={handleClick} value="2">
            2
          </button>
          <button onClick={handleClick} value="3">
            3
          </button>
          <button onClick={handleClick} value="-" className="opertator">
            -
          </button>
          <button onClick={handleClick} value="0">
            0
          </button>
          <button onClick={handleClick} value="DEL" className="opertator">
            DEL
          </button>
          <button onClick={handleClick} value="CE" className="opertator">
            CE
          </button>
          <button onClick={handleClick} value="+" className="opertator">
            +
          </button>
          <button onClick={handleClick} value="=" className="opertator">
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
