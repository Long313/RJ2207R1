import React from "react";
function Input(props) {
    return (
        <div>
            <label style={props.style}>{props.label}</label>
            <input name={props.name} className={props.className} onChange={props.onChange}/>
        </div>
    )
}
export default Input;