import 'bootstrap/dist/css/bootstrap.min.css';
function Alert(props) {
    return (
        <div className={props.className} role={props.role}>
             {props.text}
        </div>
    )
}
export default Alert;