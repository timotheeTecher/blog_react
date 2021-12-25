//Libraries
import React from "react";
import classes from "./Input.module.css";

const Input = props => {
  
  //Variables
  let inputElement;
  switch (props.type) {
    case "input": 
      inputElement = (
        <input 
          {...props.config} 
          id={props.id}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          id={props.id}
          value={props.value} 
          onChange={props.changed}>
        </textarea>
      );
      break;
    case "select":
      inputElement = (
        <select 
          id={props.id}
          value={props.value} 
          onChange={props.changed}
        >
          {props.config.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      break;
  }

  return (
    <div className={classes.Input}>
      <label htmlFor={props.id}>{props.label}</label>
      {inputElement}
    </div>
  );
}

export default Input;