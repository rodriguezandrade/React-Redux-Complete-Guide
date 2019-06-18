import React, { Component } from 'react';
import styles from './Person.css';
import Aux from '../../../hoc/Auxiliar';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';

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
                <p onClick={this.props.click}> Soy {this.props.name} y tengo {this.props.age}</p>
                <p> {this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </Aux>
        );
    }
}

// eslint-disable-next-line react/no-typos
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, styles.Person);