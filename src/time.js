import React, {useState} from 'react';
import './App.css';
function Time(){
    let [isDay,setDay]=useState(true);
   return(
     <div className={`box ${isDay?'day':''}`}>
       <h1>Day time ={isDay?'Day':'Night'}</h1>
     </div>
   );
}
export default Time;