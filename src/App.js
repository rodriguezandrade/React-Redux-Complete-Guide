import React, { Component } from 'react';
import style from './App.module.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    persons: [
      { name: 'jonathan', age: "21" },
      { name: 'Hola', age: "22" },
      { name: 'Otro', age: "23" },
      { name: 'que pedo mae', age: "23" }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  // switchNameHandler = (newName) => {
  //   // do not do this  this.state.persons[0].name = 'aa perrro';
  //   this.setState({
  //     persons: [
  //       { name: newName, age: '20' },
  //       { name: 'pn', age: '20' },
  //       { name: 'ud', age: '20' },
  //       { name: 'pinu', age: '20' }
  //     ],
  //     otherState: this.state.otherState
  //   });

  // }

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

    this.setState({ persons: persons });

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
        { id: "asf1", name: 'jonathan', age: "21" },
        { id: "asf2", name: 'Hola', age: "22" },
        { id: "asf3", name: 'Otro', age: "23" },
        { id: "asf4", name: 'que pedo mae', age: "23" }
      ],
      otherState: 'some other value',
      showPersons: !doesShow
    })
  }

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {

            return (
              <ErrorBoundary key={person.id}>
                <Person
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  key={person.id}
                  changed={(event) => this.nameChangedHandler(event, person.id)} />
              </ErrorBoundary>
            )
          })}
        </div >
      )
    }

    return (
      <div className={style.App} >
        <h1> Hola test</h1>
        <button
          className={style.Button}
          onClick={() => this.switchNameHandler('monky')}>Switch Name</button>
        <button
          onClick={this.togglePersonsHandler}>Okay</button>
        {persons}
      </div >
    );
  }
  //   return React.createElement('div', {className: 'App'}, React.createElement('h1', null, ' que ondas como estas?'));
}

export default App;