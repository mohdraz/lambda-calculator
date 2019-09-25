import React, {useState} from "react";
import NumberButtons from "./NumberButton";

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

import {numbers} from '../../../data.js';

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);

  const mappedNumber = numberState.map( (data, index) => (
    <NumberButtons key={index} number={data} />
  ));
  return (
    <div className="numberButtonContainer">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {mappedNumber}
    </div>
  );
};

export default Numbers;
