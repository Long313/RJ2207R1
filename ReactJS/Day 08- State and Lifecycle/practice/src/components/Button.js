import React from 'react';
function Button(props) {
    return(
        <div>
            <button className={props.className} onClick={props.onClick} value={props.value}>{props.label}</button>
        </div>
    )
}
export default Button;