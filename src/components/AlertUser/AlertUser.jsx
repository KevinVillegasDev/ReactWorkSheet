import React from 'react';
import './AlertUser.css';

const AlertUser = (props) => {
    return ( 
        <button onClick={props.alert}>Click Me</button>
     );
}
 
export default AlertUser;