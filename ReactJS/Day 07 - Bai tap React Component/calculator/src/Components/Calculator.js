import { Component} from "react";
import Button from "./Button"
class Calculator extends Component {
        constructor(props) {
            super(props);
            this.str = '';   
        }
        getValue = (e) => {
            let result = document.querySelector('.result');
            this.str += e.target.value;
            result.innerText = this.str;
        }

        calculator = () => {
            let result = document.querySelector('.result');
            let str = this.str;
            let output = eval(str);
            result.innerText = output;
        }
        delete = () => {
            let result = document.querySelector('.result');
            let currentStr = this.str.slice(0,this.str.length-1);
            this.str = currentStr
            result.innerText = this.str;
        }
        render() {
            return (
                    <div className="calculator bg-dark bg-gradient w-25 mx-auto my-5 py-1 rounded-3 shadow-lg">
                        <div className="result bg-light bg-gradient mx-3 my-2 mb-2 rounded-1 border-1 p-1">0</div>
                        <div className=" ms-2 mb-2">
                            <div className="d-flex flex-row ms-2 mb-1">
                            <Button className="btn bg-danger bg-gradient w-75 h-100 text-white" onClick={this.getValue} value='+'/>
                            <Button className="btn bg-danger bg-gradient w-75 h-100 text-white" onClick={this.getValue} value='-'/>
                            <Button className="btn bg-danger bg-gradient w-75 h-100 text-white" onClick={this.getValue} value='*'/>
                            <Button className="btn bg-danger bg-gradient w-75 h-100 text-white" onClick={this.getValue} value='/'/>
                            </div>
                            <div className="d-flex flex-row ms-1 mb-1">
                                <div className="">
                                    <div className="d-flex flex-row ms-1 mb-1">
                                        <Button className="btn bg-secondary bg-gradient w-75 h-100 text-white" onClick={this.getValue} value='7'/>
                                        <Button className="btn bg-secondary bg-gradient w-75 h-100 text-white" onClick={this.getValue} value='8'/>
                                        <Button className="btn bg-secondary bg-gradient w-75 h-100 text-white" onClick={this.getValue} value='9'/>
                                    </div>
                                    <div className="d-flex flex-row ms-1 mb-1">
                                        <Button className="btn bg-secondary bg-gradient w-75 h-100 text-white" onClick={this.getValue} value='4'/>
                                        <Button className="btn bg-secondary bg-gradient w-75 h-100 text-white" onClick={this.getValue} value='5'/>
                                        <Button className="btn bg-secondary bg-gradient w-75 h-100 text-white" onClick={this.getValue} value='6'/>
                                    </div>
                                    <div className="d-flex flex-row ms-1 mb-1">
                                        <Button className="btn bg-secondary bg-gradient w-75 h-100 text-white" onClick={this.getValue} value='1'/>
                                        <Button className="btn bg-secondary bg-gradient w-75 h-100 text-white" onClick={this.getValue} value='2'/>
                                        <Button className="btn bg-secondary bg-gradient w-75 h-100 text-white" onClick={this.getValue} value='3'/>
                                    </div>
                                    <div className="d-flex flex-row ms-1 mb-1">
                                        <Button className="btn bg-secondary bg-gradient w-75 h-100 text-white" onClick={this.getValue} value='0'/>
                                        <Button className="btn bg-secondary bg-gradient w-75 h-100 text-white" onClick={this.getValue} value='.'/>
                                        <Button className="btn bg-secondary bg-gradient w-75 h-100 text-white" onClick={this.delete} value='AC'/>
                                    </div>
                                </div>
                                <Button className="btn bg-warning bg-gradient w-75 h-100 1000 text-white" onClick={this.calculator} value='='/>
                        </div>
                        </div>
                    </div>
            )
        }
}
export default Calculator;