import React, { useEffect } from 'react';
import style from "../../Components/Persons/Person/Person"
const cockpit = (props) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        console.log('use Efect');
        setTimeout(() => {
            alert('Save data to cloud')
        }, 1000);

        return () => {
            console.log('cleanup worl in useEffect');
        }
    }, []);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        console.log('SECOND useEffect');

        return () => {
            console.log('Cleanup Work in 2nd useEffect');
        }
    })

    return (
        <div>
            <h1>{props.title}</h1>
            <button
                className={style.Button}
                onClick={() => this.switchNameHandler('monky')}>Switch Name</button>
            <button
                onClick={props.toogle}>Okay</button>
        </div>
    );
}

export default cockpit;