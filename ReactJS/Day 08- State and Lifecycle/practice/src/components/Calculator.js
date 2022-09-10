import React from 'react';
import Button from './Button';
class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstNumber: 0,
            secondNumber: 0,
            operator: '',
            result: ''
        }
    }
    getValue = (e) => {
        this.setState({[e.target.name]: parseInt(e.target.value)})
    }
    calculator = (e) => {
        let operator = e.target.value;
        switch (operator) {
            case '+':
            this.setState({result: this.state.firstNumber + this.state.secondNumber});
            break;
            case '-':
            this.setState({result: this.state.firstNumber - this.state.secondNumber});
            break;
            case '*':
            this.setState({result: this.state.firstNumber * this.state.secondNumber});
            break;
            case '/':
            this.setState({result: this.state.firstNumber / this.state.secondNumber});
            break;
            default:
            this.setState({result: ''});
        }
    }
    render() {
        return (
            <div >
                <input name="firstNumber" onChange={this.getValue}/>
                <br/>
                <input name="secondNumber" onChange={this.getValue}/>
                <p>Result: {this.state.result}</p>
                <div style={{display: 'flex'}}>
                <Button onClick={this.calculator} label='+' value='+'/>
                <Button onClick={this.calculator} label='-' value='-'/>
                <Button onClick={this.calculator} label='*' value='*'/>
                <Button onClick={this.calculator} label='/' value='/'/>  
                </div>
            </div>
        )
    }
}
export default Calculator;