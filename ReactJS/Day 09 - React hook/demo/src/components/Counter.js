import { useState } from "react";
export default function Counter() {
   const [count, setCount] = useState(0);
   const increase = () => {
      setCount(count + 1);
   }
   return (
      <div className="container">
         <p>Count: {count}</p>
         <button onClick={increase}>Count</button>
      </div>
   )
}