import {useState,useEffect,useRef } from "react"
//  import styles from './Stopwatch.module.css'
const Stopwatch =()=>{
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);
 useEffect(()=>{
        if(isRunning){
        
            // starting time 0 to 1000 every 1 sec
           intervalRef. current = setInterval(()=>{setTime(prevstate => prevstate+1);
          },1000);
        } else if(!isRunning && intervalRef.current){
             clearInterval(intervalRef.current)
             intervalRef.current = null;
        }
        return ()=>clearInterval(intervalRef.current)
    },[isRunning])
    // method to start timer 
     const handleStopwatch=()=>{
        setIsRunning((prevstate)=>!prevstate)
     }
    // method to reset  timer back to 0
     const resetTime=()=>{
        setTime(0);
        setIsRunning(false)
    }
     // time calculation 
     // minutes calculation 
      const minute = Math.floor(time/60);
      // second calculation 
       const second = (time%60);
 return(
    <div>
       <h1>StopWatch</h1>
       <p> Time: {minute.toString().padStart(1, '0')} : {second.toString().padStart(2, '0')}</p>
        <div>
            <button onClick={handleStopwatch}>{isRunning ? 'stop' : 'start'}</button>
            <button onClick={resetTime}>Reset</button> 
        </div>
    </div>
   )
   
}
export default Stopwatch