import React from "react";
import Button from "./Button";
class ComponentExpant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpand: false
        }
    }
    changeDisplay = () => {
        this.setState({isExpand: !this.state.isExpand});
    }
    render() {
        let intro ;
        if(this.state.isExpand) {
            intro = (
                <div>
                    <h3>Giới thiệu</h3>
                    <p>Trong ReactJs, đôi khi bạn có một số component và tuỳ thuộc vào từng điều kiện ví dụ như trạng thái của state, props,...
                         mà bạn muốn hiển thị một hoặc một số component nào đó. Khi đó bạn có thể sử dụng Conditional rendering để render ra component mà bạn mong muốn.</p>
                </div>
            )
        }
        return (
            <div>
                <div style={{height:'50px', backgroundColor:'green',}}>
                    <h1 style={{marginTop:0, color:'white'}}>Conditional Rendering</h1>
                </div>
                <Button label={this.state.isExpand?'Đóng giới thiệu': 'Giới thiệu'} onClick={this.changeDisplay}/>
                <div>{intro}</div>
            </div>
        )
    }
}
export default ComponentExpant;