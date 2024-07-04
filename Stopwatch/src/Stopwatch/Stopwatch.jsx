import { useEffect, useState } from "react"
 import styles from './Stopwatch.module.css'
const Stopwatch =()=>{
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
 useEffect(()=>{
        let intervalId;
     if(isRunning){
            // starting time 0 to 1000 every 1 sec
            intervalId = setInterval(()=>{setTime(prevstate => prevstate+1);

            },1000)
        }
         return () => clearInterval (intervalId)
    },[isRunning, time])
    // method to start timer 
     const startTime=()=>{
        setIsRunning((prevstate)=>!prevstate)
     }
    // method to reset  timer back to 0
     const ressetTime=()=>{
        setTime();
         setIsRunning(false)
     }
     // time calculation 
     // minutes calculation 
      const minute = Math.floor(time/60);
      // second calculation 
       const second = (time%60);
 return(
    <div className={styles.container}>
       <center><h1>StopWatch</h1></center>
       <p className={styles.Stopwatch}> Time: {minute.toString().padStart(1, '0')} : {second.toString().padStart(2, '0')}</p>
        <div className={styles.btncontainer}>
            <button  className={`${styles.btntext}  ${isRunning? styles.stopbtntext:''}`} onClick={startTime}> {isRunning? 'Stop': 'Start'}</button>
            <button  className ={styles.btn} onClick={ressetTime}>Reset</button> 
        </div>
            
        
    </div>
 )
   
}
export default Stopwatch