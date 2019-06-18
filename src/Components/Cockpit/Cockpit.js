import React, { useEffect, useRef } from 'react';
import style from "../../Components/Persons/Person/Person"
const cockpit = (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const toggleBtnRef = useRef(null);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        console.log('use Efect');
        // setTimeout(() => {
        //     alert('Save data to cloud')
        // }, 1000);

        toggleBtnRef.current.click();

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
                ref={toggleBtnRef}
                onClick={props.toogle}
            >Okay</button>

            <button onClick={props.login}>Log in</button>
        </div>
    );
}

export default cockpit;