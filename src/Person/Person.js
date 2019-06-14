import React from 'react';
import styles from './Person.css';

const person = (props) => {
    const rnd = Math.random();

    if (rnd > 0.7) {
        throw new Error('Algo paso mal');
    }

    return (
        <div className={styles.Person}>
            <p onClick={props.click}> Soy {props.name} y tengo {props.age}</p>
            <p> {props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default person;