import { useState } from "react";
export default function useClock() {
    const [time, setTime] = useState('');
    const updateTime = () => {
        const dateInfor = new Date();
        let hour = dateInfor.getHours();
        let min = dateInfor.getMinutes();
        let second = dateInfor.getSeconds();
        setTime(`${hour}: ${min}: ${second}`);
    }
    setInterval(()=> {
        updateTime();
    }
    ,1000)
    return [time];
}