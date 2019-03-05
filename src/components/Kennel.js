import React, {Component} from 'react';
import EmployeeList from './employee/EmployeeList'
import LocationList from './location/LocationList'
import AnimalList from './animal/AnimalList'

class Kennel extends Component {
    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    // This will eventually get pulled from the API
    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]

    animalsFromAPI = [
        { id: 1, name: "Tigger", species: "Cat"},
        { id: 2, name: "Little Bear", species: "Dog"},
        {id: 3, name: "Grim", species: "Fish"}
    ]



    state = {
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animalsFromAPI
    }

    render() {
        return (
            <div>
                <EmployeeList employees={this.state.employees} />
                <LocationList locations={this.state.locations} />
                <AnimalList animals={this.state.animals} />
            </div>
        );
    }
}

export default Kennel;