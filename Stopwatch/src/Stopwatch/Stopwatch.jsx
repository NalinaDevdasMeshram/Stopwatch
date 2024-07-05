import {useState,useEffect} from "react"
//  import styles from './Stopwatch.module.css'
const Stopwatch =()=>{
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    
 useEffect(()=>{
    let intervalId;
        if(isRunning){
           
            // starting time 0 to 1000 every 1 sec
           intervalId = setInterval(()=>{setTime(prevstate => prevstate+1);
          },1000);
        } else{
             clearInterval(intervalId)
             
        }
        return ()=>clearInterval(intervalId)
    },[isRunning])
    // method to start timer 
     const startStop=()=>{
        setIsRunning((prevstate)=>!prevstate)
     };
    // method to reset  timer back to 0
     const resetTime=()=>{
       setIsRunning(false)
        setTime(0);
    }
     const formatTime = (seconds)=>{
        const minutes = Math.floor(seconds/60)
        const remainingSecond = seconds % 60;
        return `${minutes}:${remainingSecond < 10 ? "0":""}${remainingSecond}`
     }
      
 return(
    <div>
       <h1>StopWatch</h1>
       <p> Time: {formatTime(time)}</p>
        <div>
            <button onClick={startStop}>{isRunning ? 'stop' : 'start'}</button>
            <button onClick={resetTime}>Reset</button> 
        </div>
    </div>
   )
   
}
export default Stopwatch