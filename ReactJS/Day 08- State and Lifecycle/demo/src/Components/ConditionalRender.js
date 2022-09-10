import React from "react";
class ConditionalRender extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            inputText: '',
            mode: 'view'
        }
    }
    handleChange(e) {
        this.setState({inputText: e.target.value});
    }
    handleSave() {
        this.setState({text: this.state.inputText, mode:'view'})
    }
    handleEdit() {
        this.setState({mode: 'edit'});
    }
    render() {
        if(this.state.mode === "view") {
            return (
                <div>
                    <p>Text: {this.state.text}</p>
                    <button onClick={this.handleEdit}>Edit</button>
                </div>
            )
        } else {
            <div>
                <p>Text: {this.state.text}</p>
                <input onChange={this.handleChange} value={this.state.inputText}/>
                <button onClick={this.handleSave}>Save</button>
            </div>
        }
    }
}
export default ConditionalRender;