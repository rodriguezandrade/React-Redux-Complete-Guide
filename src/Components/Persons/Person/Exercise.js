import React from 'react';
import './Person.css';

const exercise = (props) => {
    return (
        <div>
            <p>********************************************************* Excersice *********************************************************</p>
            <input onChange={props.changed} value={props.input}/>
            <p > Usuario = {props.input} </p>
            <input />
            <p> Contrasena 2 = {props.input2}</p>+
        </div>
    )
}

export default exercise;