import React from "react";
class BMICaculator extends React.Component {
  constructor(props) {
    super(props);
   }
  calculator() {
    const inputHeight= document.getElementsByClassName('height');
    const inputWeight= document.getElementsByClassName('weight');
    const total = document.getElementsByClassName('total');
    const height = parseFloat(inputHeight.value);
    const weight = parseFloat(inputWeight.value);
    const result = weight/(height*height)/10000;
    total.innerText = result;
  }
  render() {
    return (
      <div>
        <h1>BMI Caculator</h1>
        <label for="">Height</label>
        <input className="height" type="number" name="" value="" />
        <br/>
        <label for="">Weight</label>
        <input className="weight" type="number" name="" value="" />
        <br/>
        <p>Your BMI is: <span className="total"></span></p>
        <button onClick={this.calculator} type="" className="Caculator">Caculator</button>
      </div>
    );
  }
}
export default BMICaculator;
