import React, { Component } from 'react';
import style from "../../Components/Persons/Person/Person"
const cockpit = (props) => {
    return (
        <div>
            <h1> Hola test</h1>
            <button
                className={style.Button}
                onClick={() => this.switchNameHandler('monky')}>Switch Name</button>
            <button
                onClick={props.toogle}>Okay</button>
        </div>
    );
}

export default cockpit;