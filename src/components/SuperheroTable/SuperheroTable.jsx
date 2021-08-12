import React from 'react';
import './SuperheroTable.css';

const SuperheroTable = (props) => {
    return ( 
        <div>
            <table className="table">
                <tr>
                        <th className = "th">Superhero Name</th>
                        <th className = "th">Primary Ability</th>
                        <th className = "th">Secondary Ability</th>
                </tr>
                    
                        {props.superTable.map(superheroes => (
                         
                        <tr key={superheroes.superheroId}>
                            <td className="td"> {superheroes.name} </td>
                            <td className="td"> {superheroes.primaryAbility} </td>
                            <td className="td"> {superheroes.secondaryAbility} </td>
                        </tr>
                        
                    
                
                    
                    ))}
            </table>
            
        </div>
     );
}
 
export default SuperheroTable;