import React, {useState} from 'react';
import './App.css';
function Counter(){
    let [count,setCount] =useState(1);
   return(
     <div>
         <h1>Number of Items in cart:{count}</h1>
         <button onClick={
             () => setCount(count+1)
         }>Add Item</button>
         <br />
         <button onClick={
             () => setCount(count-1)}>Sub Item</button>
     </div>
   );
}
export default Counter;