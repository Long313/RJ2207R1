import React from "react";
class BMICaculator extends React.Component {
  constructor(props) {
    super(props);
   }
  input () {
    const inputHeight= document.getElementsByClassName('height');
    const inputWeight= document.getElementsByClassName('weight');
    const height = parseFloat(inputHeight.value);
    const weight = parseFloat(inputWeight.value);
  }
  calculator() {
    const total = document.getElementsByClassName('total');
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
