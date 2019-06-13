import React from 'react';
import './Person.css';

const exercise = (props) => {
    return (
        <div>
        <p>********************************************************* Excersice *********************************************************</p>
        <input />
        <p> Parrafo 1= { props.input } </p>
        <input />
        <p> Parrafo 2 = {props.input2}</p>
        </div> 
    )
}

export default exercise;