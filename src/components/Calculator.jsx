import { useState } from "react";
import "./calculator.css"

function Calculator() {
  const [num, setNum] = useState(0)

  const inputNum = (e) => {
    if (num === 0) {
      setNum(e.target.value)
    }
    else {
      setNum(num + e.target.value)
    }
  }

  const clear = () => {
    setNum(0)
  }

  const porcentage = () => {
    setNum(num / 100)
  }

  const calculate = () => {
    console.log("Calculou!")
  }

  const operatorHandler = () => {
    if (num > 0) {
      setNum(-num)
    }
    else {
      setNum(Math.abs(num))
    }
  }

  return ( 
    <div className="wrapper">
      <h1 className="result">{num}</h1>

      <button className="lightGrey" onClick={clear}>AC</button>
      <button className="lightGrey" onClick={operatorHandler}>+/-</button>
      <button className="lightGrey" onClick={porcentage}>%</button>
      <button className="orange">/</button>

      <br/>

      <button onClick={inputNum} value={7}>7</button>
      <button onClick={inputNum} value={8}>8</button>
      <button onClick={inputNum} value={9}>9</button>
      <button className="orange">X</button>

      <br/>


      <button onClick={inputNum} value={4}>4</button>
      <button onClick={inputNum} value={5}>5</button>
      <button onClick={inputNum} value={6}>6</button>
      <button className="orange">-</button>

      <br/>


      <button onClick={inputNum} value={1}>1</button>
      <button onClick={inputNum} value={2}>2</button>
      <button onClick={inputNum} value={3}>3</button>
      <button className="orange">+</button>

      <br/>


      <button id="large" onClick={inputNum} value={0}>0</button>
      <button onClick={inputNum} value={"."}>,</button>
      <button className="orange last" onClick={calculate}>=</button>      
    </div>
   );
}

export default Calculator;