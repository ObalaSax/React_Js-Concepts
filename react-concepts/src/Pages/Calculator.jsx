function Calculator() {
  return (
    <div className="myCacl">
      <div className="calculator">
        <h1 className="calc-title">Calculator</h1>
        <div className="input-box">
          <input type="text" name="display" id="display" readOnly />
        </div>
        <div className="calc-buttons">
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>/</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>*</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>-</button>
          <button>0</button>
          <button>C</button>
          <button>CE</button>
          <button>+</button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
