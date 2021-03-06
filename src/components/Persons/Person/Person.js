import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.module.css';
import Aux from '../../../hoc/Axullary';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        this.inputElementRef.current.focus();
        console.log(this.context.authentificated);
    }

    render() {
        console.log('[Person.js] rendering...');

    return (
        <Aux>
            {this.context.authentificated ? <p>Authentificated</p> : <p>Please Log In</p>}
                
            
            
            <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old!</p>
            <p>{this.props.children}</p>
            <input 
                ref={this.inputElementRef}
                type="text" 
                onChange={this.props.changed} 
                value={this.props.name} />
        </Aux>
        )
    }
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person); 