import React, {useState} from 'react';
import './App.css';
function Time(){
    let [isDay,setDay]=useState(false);
   return(
     <div className={`${isDay? 'day':'box'}`}>
         <h1>Good {isDay?'Morning':'Night'}</h1>
         <button onClick={() =>setDay(!isDay)}>Set Time</button>
         <br />
     </div>
   );
}
export default Time;