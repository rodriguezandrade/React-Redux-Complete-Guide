import React, { Component } from 'react';
import styles from './Person.css';
import Aux from '../../../hoc/Auxiliar';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';

export class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }
    componentDidMount() {
        // document.querySelector('input').focus();
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

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
                {this.props.isAuth ? <p>Authenticated!</p> : <p>Please Log in!</p>}

                <p onClick={this.props.click}> Soy {this.props.name} y tengo {this.props.age}</p>
                <p> {this.props.children}</p>
                <input
                    // ref={(inputEl) => { this.inputElement = inputEl }}
                    ref={this.inputElementRef}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name} />
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