import React, {useState} from 'react';
function Counter(){
    let [count,setCount] =useState(1);
   return(
     <div>
         <h1>Number of Items in cart:{count}</h1>
         <button onClick={
             () => setCount(count+1)
         }>Add Items</button>
         <br />
         <button onClick={
             () => setCount(count-1)
         }>Subtract Items</button>
     </div>
   );
}
export default Counter;