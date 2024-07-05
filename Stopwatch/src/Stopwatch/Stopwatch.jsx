import {useState,useEffect} from "react"
//  import styles from './Stopwatch.module.css'
const Stopwatch =()=>{
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

 useEffect(()=>{
    let intervalId;
        if (isRunning) {
           intervalId = setInterval(()=>{setTime (prevstate => prevstate + 1);
          }, 2000);
         } 
         else{
             clearInterval(intervalId)
            }
        return ()=>clearInterval(intervalId)
    },[isRunning])
    // method to start timer 
     const startStop=()=>{
        setIsRunning(!isRunning)
     };
    // method to reset  timer back to 0
     const ResetTime = () => {
        setTime(0);
        setIsRunning(false);
    }
     const formatTime = (seconds)=>{
        const minutes = Math.floor(seconds/60);
        const remainingSecond = seconds % 60;
        return `${minutes} : ${remainingSecond < 10 ?"0":" "}${remainingSecond}`;
     }
    
    
 return(
    <div>
       <h1>Stopwatch</h1>
       <p>{`Time:  ${formatTime(time)}`}</p>
        <div>
            <button onClick={startStop}>{isRunning ? 'Stop' : 'Start'}</button>
            <button onClick={ResetTime}>Reset</button> 
        </div>
    </div>
   )
   
}
export default Stopwatch