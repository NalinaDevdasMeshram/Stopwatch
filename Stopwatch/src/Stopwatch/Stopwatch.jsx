import {useState, useRef} from "react"
//  import styles from './Stopwatch.module.css'
const formatTime = (time)=>{
   let stringData = time.current.innerHTML;
   if(!stringData || !stringData.includes(':')){
    stringData= "0:00"
   }
   let [minutes, seconds] = stringData.split(':').map(Number); 
     seconds += 1;
     if(seconds === 60){
       minutes+=1;
       seconds = 0;
     }
     const min = minutes.toString();
     const sec = seconds.toString().padStart(2, '0')
 
     time.current.innerHTML = `${min}:${sec}`;
}
const Stopwatch =()=>{
    const [timeIn, setTimeIn] = useState(0);
    const valref = useRef(null);

    const handleStartStop = (e) =>{
      let val = e.target.innerHTML;
      console.log(val)
      if(val === 'Start'){
         e.target.innerHTML = "Stop"
         let t = valref
        let timer = setInterval(formatTime, 1000, t)
         console.log(timer)
         setTimeIn(timer)
      }else{
         e.target.innerHTML = 'Start'
         clearInterval(timeIn)
      }
    }
    

     const handleResetTime = ()=>{
      valref.current.innerHTML = "0:00";
         clearInterval(timeIn)
     }
    
    
 return(
    <div>
       <h1>Stopwatch</h1>
       <span>Time</span>
       <span ref={valref}>0:00</span>
        <div>
            <button onClick={handleStartStop}>
                Start
            </button>
            <button onClick={handleResetTime} style={{margin:'10px'}}>Reset</button> 
        </div>
    </div>
   )
   
}
export default Stopwatch
