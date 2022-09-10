import React from "react";
class ChangeBackgroudColor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'black'
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({color: 'red'});
        },5000)
    }
    render() {
        return (
            <div style = {{
                backgroundColor: this.state.color,
                margin: '100px auto',
                width: '50%',
                height: '200px'
            }}>
            </div>
        )
    }
}
export default ChangeBackgroudColor;