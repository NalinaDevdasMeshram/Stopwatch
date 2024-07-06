import {useState,useEffect, useRef} from "react"
//  import styles from './Stopwatch.module.css'
const formatTime = (time)=>{
   let stringData = time.current.innerHTML;
   let [minutes, seconds] = stringData.split(':').map(Number);

   seconds += 1;
   if (seconds === 60) {
       minutes += 1;
       seconds = 0;
   }

   const min1 = minutes.toString();
   const sec1 = seconds.toString().padStart(2, "0");

   time.current.innerHTML = `${min1}:${sec1}`;
 
    
}
const Stopwatch =()=>{
    const [timer, setTimer] = useState(null);
    const timeref = useRef(null);

    const handleStartStop = (e) =>{
      const  val = e.target.innerHTML;
      
      if(val === 'Start'){
         e.target.innerHTML = "Stop"
         const t = timeref
        const newTimer = setInterval( ()=>formatTime(t), 1000)
         // console.log(timer)
         setTimer(newTimer)
      }else{
         e.target.innerHTML = 'Start'
         clearInterval(timer);
         setTimer(null);
      }
    }
    

     const handleResetTime = ()=>{
      timeref.current.innerHTML = "0:00";
         if(timer){
            clearInterval(timer);
            setTimer(null);
         }
     }
     useEffect(() => {
      return () => {
          if (timer) {
              clearInterval(timer);
          }
      };
  }, [timer]);
    
 return(
    <div>
       <h1>Stopwatch</h1>
       <span>Time :</span>
       <span ref={timeref}>0:00</span>
        <div>
            <button onClick={handleStartStop}>
                Start
            </button>
            <button onClick={handleResetTime}>Reset</button> 
        </div>
    </div>
   )
   
}
export default Stopwatch
