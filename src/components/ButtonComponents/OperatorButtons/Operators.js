import React, {useState} from "react";
import OperatorButton from "./OperatorButton";

//import any components needed

//Import your array data to from the provided data file

import {operators} from "../../../data.js";

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorState, setOperatorState] = useState(operators);
  const mappedOperators = operatorState.map((data, index) => (
      <OperatorButton key={index} operators={data.char} />
  ));
  return (
    <div className="operatorButtonContainer">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {mappedOperators}
    </div>
  );
};

export default Operators;