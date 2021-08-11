import React from 'react';
import './NamesList.css';

const NamesList = (props) => {
    return ( 
        <div>
            <ol>
                {props.displayNameList.map(names => (
                    <li key={names}>{names}</li>
                ))}
            </ol>
        </div>
     );
}
 
export default NamesList;