import React from "react";
import classes from './PackItem.module.css'

const packItem = (props) => {
   return (
       <div className={classes.PackItem}>
           <p>Name: {props.name}</p>
           <p>Quantity: {props.quantity}</p>
           <p>Calories: {props.calories}</p>
       </div>
   )
};

export default packItem
