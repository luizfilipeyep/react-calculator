import "./calculator.css"

function Calculator() {
  return ( 
    <div className="wrapper">
      <button className="lightGrey">AC</button>
      <button className="lightGrey">+/-</button>
      <button className="lightGrey">%</button>
      <button className="orange">/</button>

      <br/>

      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button className="orange">X</button>

      <br/>


      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button className="orange">-</button>

      <br/>


      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button className="orange">+</button>

      <br/>


      <button id="large">0</button>
      <button>,</button>
      <button className="orange last">=</button>      
    </div>
   );
}

export default Calculator;