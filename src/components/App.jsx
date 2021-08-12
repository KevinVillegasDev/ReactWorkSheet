import React, { Component } from 'react';
import './App.css'
import DisplayName from './DisplayName/DisplayName';
import NamesList from './NamesList/NamesList';
import AlertUser from './AlertUser/AlertUser';
import SuperheroTable from './SuperheroTable/SuperheroTable';
import SuperheroForm from './SuperheroForm/SuperheroForm';
import Joke from './Joke/Joke';


class App extends Component {
    constructor(props){
        super(props)
    
        this.state = {
            firstName: 'Reggie',
            lastName: 'White',
            names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly'],
            superheroes: [
                {
                    superheroId: 1,
                    name: 'Batman',
                    primaryAbility: 'Wealthy',
                    secondaryAbility: 'Rich'
                },
                {
                    superheroId: 2,
                    name: 'Superman',
                    primaryAbility: 'Super strength',
                    secondaryAbility: 'Fly'
                },
                {
                    superheroId: 3,
                    name: 'Spiderman',
                    primaryAbility: 'Spider senses',
                    secondaryAbility: 'Shoots web'
                }
            ]
        };
    }

    AlertTheUser = () => {
        return(
            alert("devCodeCamp"
            ));
    }

    newSuperHero = (newSuper) =>{
        console.log('from the create SuperheroForm component', newSuper);
        let newArray = this.state.superheroes;
        newArray.push(newSuper)
        this.setState({
            superHeroes: newArray
        })
    }

    render(){
        return(
            <div className = "container-fluid">
                <h1>
                    <DisplayName firstName={this.state.firstName} lastName={this.state.lastName}/>
                    <Joke />
                </h1>
                <ol>
                    <NamesList displayNameList={this.state.names}/>
                </ol>
                <AlertUser alert={this.AlertTheUser}/>
                <SuperheroTable superTable={this.state.superheroes}/>
                <SuperheroForm addHero = {this.newSuperHero}/>
                
            </div>

        )
    }
}

export default App