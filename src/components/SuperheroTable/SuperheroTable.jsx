import React from 'react';
import './SuperheroTable.css';

const SuperheroTable = (props) => {
    return ( 
        <div>
            <table className="table">
                    {props.superTable.map(superheroes => (
                        <p key={superheroes.superheroId}>
                    <tr>
                        <th className = "th">Superhero Name</th>
                        <th className = "th">Primary Ability</th>
                        <th className = "th">Secondary Ability</th>
                    </tr>
                <tr>
                    <td className="td"> {superheroes.name} </td>
                    <td className="td"> {superheroes.primaryAbility} </td>
                    <td className="td"> {superheroes.secondaryAbility} </td>
                    </tr>
                    </p>
                    ))}
            </table>
        </div>
     );
}
 
export default SuperheroTable;