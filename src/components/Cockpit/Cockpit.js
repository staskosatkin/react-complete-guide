import React from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) => {

    let btnClass = '';
    if (props.showPerson) {
        btnClass = classes.Red;
    }

    const assignedclasses = [];
    if (props.persons.length < 3) {
        assignedclasses.push(classes.red);
    }
    if (props.persons.length < 2) {
        assignedclasses.push(classes.bold);
    }

    return ( 
        <div className={classes.Cockpit}>
            <h1> Hi, I am react App </h1>
            <p className = { assignedclasses.join(' ') } > This is really working! </p>
            <button className = { btnClass }
                onClick = { props.clicked } > Toggle Persons </button>
        </div>
    );
};

export default cockpit;