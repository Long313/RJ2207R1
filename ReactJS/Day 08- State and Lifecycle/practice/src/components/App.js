import React from 'react';
import AlertNotification from './AlertNotification';
import Button from './Button';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true
        }
    }
    delete = () => {
        this.setState({display: !this.state.display})
    }
    render() {
        if(this.state.display) {
            return(
                <div>
                    <AlertNotification/>
                    <Button onClick={this.delete} label="Change Component"/>
                </div>
            ) 
        } else {
            return (
                <div>
                    <Button onClick={this.delete} label='Change Component'/>
                </div>
            )
        }
    }
}
export default App;