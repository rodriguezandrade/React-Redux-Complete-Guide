import React, { PureComponent } from 'react';
import Person from './Person/Person';
import AuthContext from '../../context/auth-context';

class Persons extends PureComponent {
    render() {
        return (
            <AuthContext.Consumer>
                {
                    (context) => this.props.persons.map((person, index) => {
                        return <Person
                            click={() => this.props.clicked(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            changed={(event) => this.props.changed(event, person.id)}
                            isAuth={this.props.isAuthenticated}
                        />
                    })
                }
            </AuthContext.Consumer >
        );
    }
}

export default Persons;