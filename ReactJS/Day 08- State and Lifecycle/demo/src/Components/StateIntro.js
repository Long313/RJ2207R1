import React from "react";
class StateIntro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                username: 'admin',
                password: 'password',
        }
    }
    handleClick = (event) => {
        this.setState({username: 'user', password: 'mypassword'});
    }
    render() {
        return (
            <div className="container">
                {this.state.username} - {this.state.password}
                <br/>
                <button onClick={this.handleClick}>Change name</button>
            </div>
        )
    }
}
export default StateIntro;