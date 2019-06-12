import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  // eslint-disable-next-line no-undef
  state = {
    persons: [
      { name: 'jonathan', age: "21" },
      { name: 'Hola', age: "22" },
      { name: 'Otro', age: "23" },
      { name: 'que pedo mae', age: "23" }
    ],
    otherState: 'some other value'
  }

  handler = () => {
    console.log('this');
    // do not do this  this.state.persons[0].name = 'aa perrro';
    this.setState({
      persons: [
        { name: 'libre', age: '20' },
        { name: 'pn', age: '20' },
        { name: 'ud', age: '20' },
        { name: 'pinu', age: '20' }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1> Hola test</h1>
        <button onClick={this.handler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age}> My Hobbies: Racing</Person>
      </div>
    );
  }
  //   return React.createElement('div', {className: 'App'}, React.createElement('h1', null, ' que ondas como estas?'));
}

export default App;
