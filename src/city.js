import React from 'react'

function City(props){
    return(
        <div>
          <h1>We are in {props.currentCity}.</h1>
          <h1>And tomorrow we will be in {props.nextCity}</h1>
        </div>
    );
}
export default City;