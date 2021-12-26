//Libraries
import React from "react";
import classes from "./Input.module.css";

const Input = props => {
  
  //Variables
  let inputElement;
  const inputClasses = [];

  if (!props.isValid && props.focused) {
    inputClasses.push(classes.invalid);
  }

  switch (props.type) {
    case "input": 
      inputElement = (
        <input 
          {...props.config} 
          id={props.id}
          value={props.value}
          onChange={props.changed}
          className={inputClasses}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          id={props.id}
          value={props.value} 
          onChange={props.changed}
          className={inputClasses}
        >
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
      {!props.isValid ? <span>{props.invalidMessage}</span> : null}
    </div>
  );
}

export default Input;