import {useState, useRef} from "react"
//  import styles from './Stopwatch.module.css'
const formatTime = (time)=>{
   let stringData = time.current.innerHTML;
   let arr = stringData.split(':');
   let minutes = arr[0];
   let seconds = arr[1];
   let mins = Number(minutes);
   let secs = Number(seconds);
     secs += 1;
     if(secs === 60){
       mins += 1;
       secs = 0;
     }
     let min1 = "";
     let sec1 = "";
 if(mins.toString().length < 2){
   min1 = mins;
 }else{
   min1 = mins;
 }
 if(secs.toString().length < 2){
   sec1 = "0" + secs;
   }else{
   sec1 = secs;
 }
 
     time.current.innerHTML = `${min1}:${sec1}`;
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
         // console.log(timer)
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
       <span>Time :</span>
       <span ref={valref}>0:00</span>
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
