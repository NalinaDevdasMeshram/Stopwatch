import {useState, useEffect,} from "react"
//  import styles from './Stopwatch.module.css'
const Stopwatch =()=>{
    const [timeIn, setTimeIn] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
   
    
 useEffect(() => {
        let intervalId;
        
        if (isRunning){
             intervalId = setInterval(()=>{setTimeIn(prevstate => prevstate + 1);
           }, 1000);
         } 
         // else if(!isRunning && timeIn !==0){
         //    clearInterval(intervalId)
         // }
         //  console.log('isRunning, timeIn',  clearInterval(intervalId))
        return () => clearInterval(intervalId) // clear in unmount 
       
    },[isRunning,timeIn])
   
    // method to start timer 
     const startStop=()=>{
        setIsRunning(!isRunning)
     };
    // method to reset  timer back to 0
   
     const ResetTime = () => {
         setTimeIn(0);
         setIsRunning(false);
    }

     const formatTime = (timeIn)=>{
        const minutes = Math.floor(timeIn/60);
        const remainingSecond = timeIn % 60;
      //   console.log(remainingSecond)
      //   console.log('formatTime', `${minutes} : ${remainingSecond < 10 ? `0${remainingSecond}`: remainingSecond}`)
        return `${minutes} : ${remainingSecond < 10 ? `0${remainingSecond}`: remainingSecond}`;
     }
    
    
 return(
    <div>
       <h1>Stopwatch</h1>
       <span>Time</span>
       <span>:{formatTime(timeIn)}</span>
        <div>
            <button onClick={startStop}>
                {isRunning ? 'Stop' : 'Start'}
            </button>
            <button onClick={ResetTime} style={{margin:'10px'}}>Reset</button> 
        </div>
    </div>
   )
   
}
export default Stopwatch
