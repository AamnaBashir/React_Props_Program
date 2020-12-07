import React, {useState} from 'react';
function Counter(){
    let [count,setCount] =useState(1);
   return(
     <div>
         <h1>Number of Items in cart:{count}</h1>
         <button onClick={
             () => setCount(count++)
         }>Add Items</button>
     </div>
   );
}
export default Counter;