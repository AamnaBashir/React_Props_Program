import React from 'react';
import './App.css';
import City from './city';
function App() {
  return (
    <div className="App">
       <City currentCity="Multan" nextCity="Lahore" />
    </div>
  );
}

export default App;
