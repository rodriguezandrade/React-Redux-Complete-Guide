import React from 'react';
import  styles from './Person.css';
 
const person = (props) => {
    return (
        <div className={styles.Person}>
            <p onClick={props.click}> Soy {props.name} y tengo {props.age}</p>
            <p> {props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default person;