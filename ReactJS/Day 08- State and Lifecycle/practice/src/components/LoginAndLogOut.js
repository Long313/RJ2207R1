import React from 'react';
import Button from './Button';
class LoginAndLogOut extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogginIn: false
        }
    }
    changeState = () => {
        this.setState({isLogginIn: true})
    }
    render() {
        if(this.state.isLogginIn) {
            return (
                <div>
                    <h1>Please Log Out</h1>
                    <Button onClick={this.changeState} label='Log Out'/>
                </div>
                )
        } else {
           return  (
           <div>
                <h1>Please Log In</h1>
                <Button onClick={this.changeState} label='Log In'/>
            </div>
           )
        }
    }
}
export default LoginAndLogOut;