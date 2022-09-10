import { Component } from "react";
import Input from "./Input";
import Button from "./Button";
class BMICalculator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            height: '',
            weight: '',
            bmi: ''
        }
    }
    handleKeyup = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
        console.log(this.state);
    }
    check = (e) => {
        e.preventDefault();
        var bmiResult = (this.state.weight / (Math.pow(this.state.height,2))).toFixed(2);
        this.setState({
            bmi: bmiResult
        })
    }
    render() {
        return (
            <div>
                <h1>BMI Calculator</h1>
                <Input value={this.state.height} name="height" label="Chiều cao" onChange={this.handleKeyup} type="number" className="height" placeholder="Nhập vào chiều cao "/> 
                <Input value={this.state.weight} name="weight" label="Cân nặng" onChange={this.handleKeyup} type="number" className="weight" placeholder="Nhập vào cân nặng"/> 
                <p>Chỉ số BMI của bạn: {this.state.bmi}</p>
                <Button className="btn btn-primary" onClick ={this.check} label="Check"/>
            </div>
        )
    }
}

export default BMICalculator;