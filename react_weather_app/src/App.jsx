// import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


function App() {
    return (
        <>
            <h1>React Weather App</h1>
            <input type = 'text' className='cityInput' placeholder = 'Enter city here...'></input>
            <FontAwesomeIcon icon = {faMagnifyingGlass} />
    </>
    )
}

export default App