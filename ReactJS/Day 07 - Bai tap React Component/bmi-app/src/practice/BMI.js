import React from "react";
class BMI extends React.Component {
    constructor(props) {
        super(props)
    }
    getValue() {
        let inputHeight = document.querySelector('#height').value;
        let inputWeight = document.querySelector('#weight').value;
        let result = document.getElementById('result');
        let height = parseInt(inputHeight) > 2 ? inputHeight/100 : inputHeight; // Nếu chiều cao không phải là mét thì cho 100( tức là lớn hơn 2m)
        let weight = parseInt(inputWeight);
        console.log(height);
        let calculator = weight/(Math.pow(height,2));
        result.innerText = calculator.toFixed(2);
    }
    render() {
        return (
            <div>
                <h1>BMI Caculator</h1>
                <div>
                    <label htmlFor="">Height</label>
                    <input id="height" type="number" name="height"/>
                </div>
                <div>
                    <label htmlFor="">Weight</label>
                    <input id="weight" type="number" name="weight"/>
                </div>
                <p >Your BMI is <span id="result"></span></p>
                <button type="" onClick={this.getValue}>Caculator</button>
            </div>
        )
    }
}
export default BMI;