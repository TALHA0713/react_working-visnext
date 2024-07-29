import React from "react";
import { useState,useMemo } from "react";
import "./DisplayData.css"

function Hooks() {

const [count, setCount] = useState(0);
const [step, setStep] = useState(1);


const multiply = useMemo(()=>{
    console.log('neeed of memo');
    return count+2;
},[count])


return (
  <div className="hooks-container">
    <div className="hooks">
      <h1>Count: {count}</h1>
      <h1>Step: {step}</h1>
      <h1>Multiply: {multiply}</h1>
      <button onClick={() => setCount(count + step)}>Increment</button>
      <button onClick={() => setStep(step + 1)}>Increase Step</button> 
    </div>
  </div>
);


    // let time = new Date().toLocaleTimeString();
    // const [gTime,setGTime] = useState(time);

    // const  getTime=()=>{
        
    //     time = new Date().toLocaleTimeString();
    //     setGTime(time);
    // }

    // setInterval(getTime,1000);
    // return <>
    // <div className="time">
    // <h1>{gTime}</h1>
    // {/* <button onClick={getTime} >Get Time</button> */}
    // </div>
    // </>
    
}
export default Hooks;