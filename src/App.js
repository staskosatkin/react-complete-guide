import React, { Component } from 'react';
import classes from './App.module.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {id: 1, name: 'Stan', age: 30 },
            {id: 2, name: 'Manu', age: 29 },
            {id: 3, name: 'Stephanie', age: 26 }
        ],
        showPersons: false
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex((person) => {
            return person.id === id
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons});
    }

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);

        this.setState({persons: persons})
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    render() {
        let persons = null;

        let btnClass = '';

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                                key={index}
                                click={() => this.deletePersonHandler(index)}
                                changed={(event) => this.nameChangedHandler(event, person.id)}
                                name={person.name} 
                                age={person.age}/>
                    })}
                </div>
            );

            btnClass = classes.Red;
        }

        let assignedclasses = [];
        if (this.state.persons.length < 3) {
            assignedclasses.push(classes.red);
        }
        if (this.state.persons.length < 2) {
            assignedclasses.push(classes.bold);
        }

        return (
            <div className={classes.App}>
                <h1>Hi, I am react App</h1>
                <p className={assignedclasses.join(' ')}>This is really working!</p>
                <button
                    className={btnClass}
                    onClick={this.togglePersonsHandler}>Toggle Persons</button>
                {persons}
            </div>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does it work now?'));
    }
}


export default App;
