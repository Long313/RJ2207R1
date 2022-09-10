import { useState, useEffect } from 'react';
export default function CounterNumber() {
    const [count, setCount] = useState({
        count1: 0,
        count2: 0,
        countTotal: 0
    })
    const handleClick = e => {
        const num= parseInt(e.target.value)
        setCount({
            ...count,
            countTotal: count.countTotal + num,
            [e.target.name]: count.countTotal + num
        })
    }
    return (
        <div>
            <h1>Count Number</h1>
            <p>Count 1: {count.count1}</p>
            <button onClick={e => handleClick(e)} name="count1" value={1}>Add 1</button>
            <p>Count 2: {count.count2}</p>
            <button onClick={e => handleClick(e)} name="count2" value={2}>Add 2</button>
        </div>
    )
}