import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cocopit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Axullary';

class App extends Component {

    constructor(props) {
        super(props);

        console.log('[App.js] constructor');
    }

    state = {
        persons: [
            {id: 1, name: 'Stan', age: 30 },
            {id: 2, name: 'Manu', age: 29 },
            {id: 3, name: 'Stephanie', age: 26 }
        ],
        showPersons: false,
        showCockpit: true,
        changeCounter: 0,
        authentificated: false
    }

    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props);

        return state;
    }

    // componentWillMount() {
    //     console.log('[App.js] componentWillMount');
    // }

    componentDidMount() {
        console.log('[App.js] componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[App.js] shouldComponentUpdate');
        return true;
    }

    componentDidUpdate() {
        console.log('[App.js] componentDidUpdate');
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

        this.setState((prevState, props) => {
            return {
                persons: persons, 
                changeCounter: prevState.changeCounter + 1
            };
        });
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

    loginHandler = () => {
        this.setState({authentificated: true});
    }

    render() {
        console.log('[App.js] render');
        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler}
                    isAuthentificated={this.state.authentificated}
                />
            );
        }

        return (
            <Aux>
                <button onClick={() => {
                    this.setState({showCockpit: false});
                }}>Remove Cockpit</button>
                {this.state.showCockpit ? <Cocopit
                    title={this.props.appTitle}
                    showPersons={this.state.showPersons}
                    personsLength={this.state.persons.length}
                    clicked={this.togglePersonsHandler} 
                    login={this.loginHandler}
                    />: null}
                {persons}
            </Aux>
                
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does it work now?'));
    }
}


export default withClass(App, classes.App);
