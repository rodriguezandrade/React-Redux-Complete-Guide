import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Exercise from './Person/Exercise';
import person from './Person/Person';
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

  switchNameHandler = (newName) => {
    // do not do this  this.state.persons[0].name = 'aa perrro';
    this.setState({
      persons: [
        { name: newName, age: '20' },
        { name: 'pn', age: '20' },
        { name: 'ud', age: '20' },
        { name: 'pinu', age: '20' }
      ],
      otherState: this.state.otherState
    });

  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Pancho', age: '21' },
        { name: 'Candita', age: '22' },
        { name: 'Tacuazin', age: '23' },
        { name: event.target.value, age: '24' }
      ]
    })
  }

  state2 = {
    input: [
      { name: 'default1' },
      { name: 'default2' }
    ]
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
        { name: 'jonathan', age: "21" },
        { name: 'Hola', age: "22" },
        { name: 'Otro', age: "23" },
        { name: 'que pedo mae', age: "23" }
      ],
      otherState: 'some other value',
      showPersons: !doesShow
    })
  }

  style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(x => {
            return <Person
              name={x.name}
              age={x.age}
            />
          })}

          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age} />
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} />
          <Person
            click={this.nameChangedHandler.bind(this, 'Mi novia')}
            changed={this.nameChangedHandler}
            name={this.state.persons[3].name}
            age={this.state.persons[3].age}> My Hobbies: Racing</Person>
        </div >
      )
    }

    return (
      <div className="App" >
        <h1> Hola test</h1>
        <button
          style={this.style}
          onClick={() => this.switchNameHandler('monky')}>Switch Name</button>

        <button
          style={this.style}
          onClick={this.togglePersonsHandler} />
        {persons}
      </div >
    );
  }
  //   return React.createElement('div', {className: 'App'}, React.createElement('h1', null, ' que ondas como estas?'));
}

export default App;