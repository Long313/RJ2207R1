function Button (props) {
    return (
        <div>
            <input className={props.className} name={props.name} value={props.value} onClick={props.onClick}/>
        </div>
    )
}

export default Button;
