import { useState } from "react";
function Form() {
    const [state, setState] = useState({
        username: '',
        age: null
    })
    const handleChange = (e) => {
        const nam = e.target.name;
        const val = e.target.value;
        if(nam === 'age') {
            if(!Number(val)) {
                alert('Your age must a number')
            }
        }
        setState({nam: val});
    }
    return(
        <div>
            <form>
            <p>Enter your name, and submit</p>
            <input name="usename" onClick={handleChange}/>
            <input name="age" onClick={handleChange}/>
            <input type="submit"/>
            </form>
        </div>
    )
}
export default Form;