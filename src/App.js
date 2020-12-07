import React from 'react';
import './App.css';
import City from './city';
import Weather from './weather';
import Counter from './counter';
function App() {
  return (
    <div className="App">
       <City currentCity="Multan" nextCity="Lahore" />
       <hr />
       <Weather tempNow="17 degrees" tempNew="16 degrees" />
       <hr />
       <Counter />
    </div>
  );
}

export default App;
