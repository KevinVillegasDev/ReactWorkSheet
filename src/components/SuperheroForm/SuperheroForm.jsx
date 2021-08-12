import React, { Component } from 'react';
import './SuperheroForm.css';

class SuperheroForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            superheroId: '',
            name: '',
            primaryAbility: '',
            secondaryAbility: '' 
        };
    }
    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let newSuper = {
            superheroId : this.state.superheroId,
            name: this.state.name,
            primaryAbility: this.state.primaryAbility,
            secondaryAbility: this.state.secondaryAbility
        }
        this.props.addHero(newSuper)
        
    };

    render() { 
        return ( 
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <label>Superhero ID</label>
                <input name="superheroId" onChange={this.handleChange} value={this.state.superheroId} />
                <label>Name</label>
                <input name="name" onChange={this.handleChange} value={this.state.name} />
                <label>Primary Ability</label>
                <input name="primaryAbility" onChange={this.handleChange} value={this.state.primaryAbility} />
                <label>Secondary Ability</label>
                <input name="secondaryAbility" onChange={this.handleChange} value={this.state.secondaryAbility} />
                <button type="submit">Create Superhero</button>
            </form>

        );
    }   

}   


export default SuperheroForm;