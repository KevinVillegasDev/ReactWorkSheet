import React from 'react';
import './NamesList.css';

const NamesList = (props) => {
    return ( 
        <div>
            <ol className="nameList">{props.nameList}</ol>
        </div>
     );
}
 
export default NamesList;