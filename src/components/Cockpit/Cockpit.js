import React, { useEffect } from 'react';
import classes from './Cockpit.module.css';

const Cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // ... http request

        setTimeout(() => {
            alert('Saved data to cloud!');
        }, 1000);

        return () => {
            console.log('[Cockpit.js] cleanup');
        };
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd effect');
        return () => {
            console.log('[Cockpit.js] cleanup in 2nd useEffect');
        };
    });

    const assignedclasses = [];
    let btnClass = '';
    if (props.showPerson) {
        btnClass = classes.Red;
    }
    
    if (props.personsLength < 3) {
        assignedclasses.push(classes.red);
    }
    if (props.personsLength < 2) {
        assignedclasses.push(classes.bold);
    }

    return ( 
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className = { assignedclasses.join(' ') } > This is really working! </p>
            <button className = { btnClass }
                onClick = { props.clicked } > Toggle Persons </button>
        </div>
    );
};

export default React.memo(Cockpit);