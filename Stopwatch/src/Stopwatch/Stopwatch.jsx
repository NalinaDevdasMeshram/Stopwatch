import {useState, useEffect,useRef} from "react"
//  import styles from './Stopwatch.module.css'
const formatTime = (timeInSeconds)=>{
   const minutes = Math.floor(timeInSeconds/60);
   const remainingSecond = timeInSeconds % 60;
 //   console.log(remainingSecond)
 //   console.log('formatTime', `${minutes} : ${remainingSecond < 10 ? `0${remainingSecond}`: remainingSecond}`)
   return `${minutes} : ${remainingSecond < 10 ? `0${remainingSecond}`: remainingSecond}`;
}
const Stopwatch =()=>{
    const [timeIn, setTimeIn] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);
    
    
 useEffect(() => {
       
       if (isRunning){
             intervalRef.current = setInterval(()=>{setTimeIn(prevstate => prevstate + 1);
           }, 1000);
         } 
          else if(intervalRef.current){
            clearInterval(intervalRef.current);
          }
         //  console.log('isRunning, timeIn',  clearInterval(intervalId))
        return () => clearInterval(intervalRef.current) // clear in unmount 
       
    },[isRunning]);

    const startStop =() =>{
      setIsRunning(prevstate => !prevstate)
    }
    
    // method to reset  timer back to 0
   
     const ResetTime = () => {
         setTimeIn(0);
         setIsRunning(false);
         
    }

   //   const formatTime = (timeIn)=>{
   //      const minutes = Math.floor(timeIn/60);
   //      const remainingSecond = timeIn % 60;
   //    //   console.log(remainingSecond)
   //    //   console.log('formatTime', `${minutes} : ${remainingSecond < 10 ? `0${remainingSecond}`: remainingSecond}`)
   //      return `${minutes} : ${remainingSecond < 10 ? `0${remainingSecond}`: remainingSecond}`;
   //   }
    
    
 return(
    <div>
       <h1>Stopwatch</h1>
       <span>Time:</span>
       <span>{formatTime(timeIn)}</span>
        <div>
            <button onClick={startStop}>
                {isRunning ? 'Stop' : 'Start'}
            </button>
            <button onClick={ResetTime} style={{margin:'4px'}}>Reset</button> 
        </div>
    </div>
   )
   
}
export default Stopwatch

