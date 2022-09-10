import { useState, useEffect } from "react";
export default function ChoseLanguageProgaming() {
    const languages = ['JavaScript', 'Java', 'PHP', 'Python'];
    const [value, setValue] = useState('');
    const [select, setSelect] = useState(0);
    const handleSelect = (e) => {
        const val = e.target.value;
        setSelect(val);
    }
    useEffect(() => {
        setValue(languages[select]);
    },[select])
    return (
        <div className='container'>
            <p>Khoá học: 
                <select onChange={e => handleSelect(e)}>
                    {languages.map((language,index) => {
                        return <option value={index} key={index}>{language}</option>
                    })}
                </select>
            </p>
            <p>You select: {value}</p>
        </div>
    )
}