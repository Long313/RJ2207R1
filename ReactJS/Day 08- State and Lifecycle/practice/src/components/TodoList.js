import React from "react";
import Button from "./Button";
class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            item: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        // this.handleAddItem = this.handleEdit.bind(this);
    }
    handleChange = (e) => {
        this.setState({
                item: e.target.value
        });
    }
    handleSave = () => {
        this.setState({
            list: [...this.state.list,this.state.item]
        })
        console.log(this.state);
    }

    render() {
        return (
            <div className="w-25 mx-auto mt-5">
                <h1 className="w-100 text-center">Todo List</h1>
                <div className="d-flex">
                <input name="" onChange={this.handleChange}/>
                <Button className="btn btn-primary" onClick={this.handleSave} label='Add'/> 
                </div>
                <ul style={{listStyle: "order-list"}}>
                    {this.state.list.map((item,index) => {
                        return (
                            <li key={index}>{item}</li>
                        )   
                        
                    })}
                </ul>
            </div>
        )
    }
}
export default TodoList;