import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
import Exercise from './Person/Exercise';
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

  const [otherState, setOtherState] = useState('some other value');
  console.log(personState, otherState);

  const switchNameHandler = (newName) => {
    // do not do this  this.state.persons[0].name = 'aa perrro';
    setPersonsState({
      persons: [
        { name: newName, age: '20' },
        { name: 'pn', age: '20' },
        { name: 'ud', age: '20' },
        { name: 'pinu', age: '20' }
      ],
      otherState: personState.otherState
    });

  }

  const nameChangedHandler = (event) => {
    setPersonsState({
      persons: [
        { name: 'Pancho', age: '21' },
        { name: 'Candita', age: '22' },
        { name: 'Tacuazin', age: '23' },
        { name: event.target.value, age: '24' }
      ]
    })
  }

  const [inputState, setInputState] = useState({
    input: [
      { name: 'default1' },
      { name: 'default2' }
    ]
  })

  const inputChangedHandler = (event) => {
    setInputState({
      input: [
        { name: event.target.value },
        { name: 'default2' }
      ]
    })
  }

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }
  return (
    <div className="App">
      <h1> Hola test</h1>
      <button style={style} onClick={() => switchNameHandler('monky')}>Switch Name</button>
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age} />
      <Person
        name={personState.persons[1].name}
        age={personState.persons[1].age} />
      <Person
        name={personState.persons[2].name}
        age={personState.persons[2].age} />
      <Person
        click={switchNameHandler.bind(this, 'Mi novia')}
        changed={nameChangedHandler}
        name={personState.persons[3].name}
        age={personState.persons[3].age}> My Hobbies: Racing</Person>

      <Exercise
        changed={inputChangedHandler}
        input={inputState.input[0].name} />
      <Exercise
        input2={inputState.input[1].name} />
    </div>
  );

  //   return React.createElement('div', {className: 'App'}, React.createElement('h1', null, ' que ondas como estas?'));
}

export default App;