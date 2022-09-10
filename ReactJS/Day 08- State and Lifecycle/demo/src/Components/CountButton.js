import React from "react";
import Button from "./Button";
class CountButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    // decrease = (event) => {
    //     this.setState({count: this.state.count - 1});
    // }
    // increase = (event) => {
    //     this.setState({count: this.state.count + 1});
    // }

    handleClick = (operator) => {
        console.log(operator);
        switch (operator) {
            case '-': 
            this.setState({count: this.state.count - 1});
            break;
            case '+': 
            this.setState({count: this.state.count + 1});
            break;
            default:
            this.setState({count: 0});
        }
    }

    render() {
        return (
            <div className="container pt-3">
                <Button className="btn btn-primary" onClick={() => this.handleClick('-')} label="-"/>
                <span>{this.state.count}</span>
                <Button className="btn btn-primary" onClick={() => this.handleClick('+')} label="+" />
                <Button className="btn btn-primary mx-3" onClick={() => this.handleClick(this)} label="test" />
            </div>
        )
    }
}
export default CountButton;