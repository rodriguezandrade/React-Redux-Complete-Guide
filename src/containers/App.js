import React, { Component } from 'react';
import style from './App.module.css';
import Persons from '../Components/Persons/Persons';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Cockpit from '../Components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import AuthContext from '../context/auth-context';

class App extends Component {

  constructor(props) {
    super(props);
    console.log(props, '[App.js] constructor');
  }

  state = {
    persons: [
      { name: 'jonathan', age: 21 },
      { name: 'Hola', age: 22 },
      { name: 'Otro', age: 23 },
      { name: 'que pedo mae', age: 23 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0
  };

  switchNameHandler = (newName) => {
    // do not do this  this.state.persons[0].name = 'aa perrro';
    this.setState({
      persons: [
        { name: newName, age: 20 },
        { name: 'pn', age: 20 },
        { name: 'ud', age: 20 },
        { name: 'pinu', age: 20 }
      ],
      otherState: this.state.otherState,
      showCockpit: true
    });

  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }
    });
  }

  state2 = {
    input: [
      { name: 'default1' },
      { name: 'default2' }
    ]
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  inputChangedHandler = (event) => {
    this.setState({
      input: [
        { name: event.target.value },
        { name: 'default2' }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    console.log(doesShow);
    this.setState({
      persons: [
        { id: "asf1", name: 'jonathan', age: 21 },
        { id: "asf2", name: 'Hola', age: 22 },
        { id: "asf3", name: 'Otro', age: 23 },
        { id: "asf4", name: 'que pedo mae', age: 23 }
      ],
      otherState: 'some other value',
      showPersons: !doesShow,
      showCockpit: true
    })
  }

  loginHandler = () => {
    this.setState({ authenticated: true })
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log('should Component Update');
    return true;
  }

  componentDidUpdate() {
    console.log('ComponentDidUpdate');

  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps', props);
    return state;
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');

  }

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
            isAuthenticated={this.state.authenticated}
          />
        </div >
      )
    }

    return (
      <div>
        <button
          onClick={() => { this.setState({ showCockpit: false }) }}
        >
          Remove Cockpit
        </button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }}
        >
          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.appTittle}
              toogle={this.togglePersonsHandler}
              login={this.loginHandler}
            />
          ) : null}
          {persons}
        </AuthContext.Provider>
      </div>
    );
  }
  //   return React.createElement('div', {className: 'App'}, React.createElement('h1', null, ' que ondas como estas?'));
}

export default withClass(App, style.App);