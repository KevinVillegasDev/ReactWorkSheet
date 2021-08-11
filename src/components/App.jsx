import React, { Component } from 'react';
import './App.css'
import DisplayName from './DisplayName/DisplayName';
import NamesList from './NamesList/NamesList';
import AlertUser from './AlertUser/AlertUser';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstName: 'Reggie',
            lastName: 'White',
            nameIndex: 0,
            names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly']
        };
    }

    AlertTheUser = () => {
        return(
            alert("devCodeCamp"
            ));
    }

    render(){
        return(
            <div className = "container-fluid">
                <h1>
                    <DisplayName firstName={this.state.firstName} lastName={this.state.lastName}/>
                </h1>
                <ol>
                    <NamesList displayNameList={this.state.names}/>
                </ol>
                <AlertUser alert={this.AlertTheUser}/>
            </div>

        )
    }
}

export default App