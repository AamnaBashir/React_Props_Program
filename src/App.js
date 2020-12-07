import React from 'react';
import './App.css';
import City from './city';
import Weather from './weather';
function App() {
  return (
    <div className="App">
       <City currentCity="Multan" nextCity="Lahore" />
       <hr />
       <Weather tempNow="17 degrees" tempNew="16 degrees" />
    </div>
  );
}

export default App;
