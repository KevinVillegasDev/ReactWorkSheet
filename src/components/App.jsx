import React, { Component } from 'react';
import './App.css'
import DisplayName from './DisplayName/DisplayName';
import NamesList from './NamesList/NamesList';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstName: 'Reggie',
            lastName: 'White',
            names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly']
        };
    }

    render(){
        return(
            <div className = "container-fluid">
                <h1>
                    <DisplayName firstName={this.state.firstName} lastName={this.state.lastName}/>
                </h1>
                <ol>
                    <NamesList nameList={this.state.names}/>
                </ol>
            </div>
        )
    }
}

export default App