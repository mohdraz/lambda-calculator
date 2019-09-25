import React from "react";

const NumberButton = (props) => {

  let numberClass; 

  if(props.number === '0' ) {
    numberClass = 'numberButton numberButtonZero';
  } else {
    numberClass = 'numberButton';
  }

  return (
    <>

      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button  className={numberClass} >{props.number}</button>
    </>
  );
};

export default NumberButton;
