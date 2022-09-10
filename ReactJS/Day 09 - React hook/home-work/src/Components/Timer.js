import { useState, useEffect } from "react";
export default function Timer() {
    const [time, setTime] = useState(10);
    useEffect(()=> {

    },[time]);
    setTimeout(()=> {
        setTime(time - 1);
    },1000)
    return (
        <div>
            <span>{time > 0 ? time : 0}</span>
        </div>
    )
}
