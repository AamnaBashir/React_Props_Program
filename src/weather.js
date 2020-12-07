import React from 'react';
function Weather(props){
    return(
      <div>
          <h1>Temprature in Multan is {props.tempNow} </h1>
          <h1>Temprature in Multan is {props.tempNew} </h1>
      </div>
    );
}
export default Weather;
