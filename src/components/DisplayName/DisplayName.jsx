import React from 'react';
import './DisplayName.css';

const DisplayName = (props) => {
    return ( 
        <div className="DisplayName">
            <h1 className="firstName">{props.firstName}</h1>
            <h1 className="lastName">{props.lastName}</h1>
        </div>
     );
}
 
export default DisplayName;