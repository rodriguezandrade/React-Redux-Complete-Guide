import React, { Component } from 'react';
import styles from './Person.css';
import Aux from '../../../hoc/Aux';
import aux from '../../../hoc/Aux';

export class Person extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        return { message: 'snapshot' };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
        console.log(snapshot);
    }

    // componentWillUpdate() {

    // }

    // componentWillReceiveProps(props) {
    //     console.log('componentWillReceiveProps', props);
    // }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        return (
            <Aux>
                <div className={styles.Person}>
                    <p onClick={this.props.click}> Soy {this.props.name} y tengo {this.props.age}</p>
                    <p> {this.props.children}</p>
                    <input type="text" onChange={this.props.changed} value={this.props.name} />
                </div>
            </Aux>
        );
    }
}

export default Person;