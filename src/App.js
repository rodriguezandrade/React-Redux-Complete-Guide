import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [personState, setPersonsState] = useState({
    persons: [
      { name: 'jonathan', age: "21" },
      { name: 'Hola', age: "22" },
      { name: 'Otro', age: "23" },
      { name: 'que pedo mae', age: "23" }
    ],
    otherState: 'some other value'
  });

  console.log(personState);
  
  const switchNameHandler = () => {
    console.log('this');
    // do not do this  this.state.persons[0].name = 'aa perrro';
    setPersonsState({
      persons: [
        { name: 'libre', age: '20' },
        { name: 'pn', age: '20' },
        { name: 'ud', age: '20' },
        { name: 'pinu', age: '20' }
      ],
      otherState: personState.otherState
    });
  }

  return (
    <div className="App">
      <h1> Hola test</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age} />
      <Person name={personState.persons[1].name} age={personState.persons[1].age} />
      <Person name={personState.persons[2].name} age={personState.persons[2].age} />
      <Person name={personState.persons[3].name} age={personState.persons[3].age}> My Hobbies: Racing</Person>
    </div>
  );

  //   return React.createElement('div', {className: 'App'}, React.createElement('h1', null, ' que ondas como estas?'));
}

export default App;