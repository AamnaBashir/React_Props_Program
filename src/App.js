import React from 'react';
import './App.css';
import City from './city';
import Weather from './weather';
import Counter from './counter';
import Time from './time';

function App() {
  return (
    <div className="App">
       <City currentCity="Multan" nextCity="Lahore" />
       <hr />
       <Weather tempNow="17 degrees" tempNew="16 degrees" />
       <hr />
       <Counter />
      <hr />
      <Time />
    </div>
  );
}

export default App;
