import { useState } from 'react';
export default function EnterYourName() {
    const [userName, setUserName] = useState('');
    const [nameInput, setNameInput] = useState('');
    const changeInput = (e) => {
        setNameInput(e.target.value);
    }
    const changeName = () => {
        setUserName(nameInput);
    }
    return (
        <div>
            <p>Your Name: {userName}</p>
            <input onChange={changeInput} id="input" type="" name=""/>
            <button onClick={changeName}>Change</button>
        </div>
    )
}