import React from 'react';
class AlertNotification extends React.Component {
    componentWillMount() {
        alert('The component will mounted')
    }
    componentWillUnmount() {
        alert('The component is going to be unmounted');
    }
    render() {
        return (
           <h1>Hello World</h1>
        )
    }
}
export default AlertNotification;