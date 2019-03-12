import { Route } from "react-router-dom";
import React, { Component } from "react";
import AnimalList from "./animal/AnimalList";
import LocationList from "./location/LocationList";
import EmployeeList from "./employee/EmployeeList";
import OwnerList from "./owner/OwnerList";
import AnimalManager from "../modules/AnimalManager"
import EmployeeManager from "../modules/EmployeeManager"
import OwnerManager from "../modules/OwnerManager"
import LocationManager from "../modules/LocationManager"
import AnimalDetail from "./animal/AnimalDetail"
import EmployeeDetail from './employee/EmployeeDetail'
import OwnerDetail from './owner/OwnerDetail'
import AnimalForm from "./animal/AnimalForm"
import SpeciesManager from "../modules/SpeciesManager";

export default class ApplicationViews extends Component {


    state = {
        animals: [],
        employees: [],
        locations: [],
        owners: [],
        species: [],
        animalSpecies: []
    }

    deleteAnimal = id => {
        return AnimalManager.deleteAnimal(id)
            .then(() => AnimalManager.getAll())
            .then(animals => this.setState({
                animals: animals
            })
            )
    }

    addAnimal = animal =>
        AnimalManager.postAnimal(animal)
            .then(() => AnimalManager.getAll())
            .then(animals =>
                this.setState({
                    animals: animals
                })
            );

    deleteEmployee = id => {
        return EmployeeManager.deleteEmployee(id)
            .then(() => EmployeeManager.getAll())
            .then(employees => this.setState({
                employees: employees
            })
            )
    }

    deleteOwner = id => {
        return OwnerManager.deleteOwner(id)
            .then(() => OwnerManager.getAll())
            .then(owners => this.setState({
                owners: owners
            })
            )
    }


    componentDidMount() {
        const newState = {}

        return AnimalManager.getAll()
            .then(animals => newState.animals = animals)
            .then(() => EmployeeManager.getAll())
            .then(employees => newState.employees = employees)
            .then(() => LocationManager.getAll())
            .then(locations => newState.locations = locations)
            .then(() => OwnerManager.getAll())
            .then(owners => newState.owners = owners)
            .then(() => SpeciesManager.getAll())
            .then((species => newState.species=species))
            .then(() => SpeciesManager.animalSpecies())
            .then((animalSpecies => newState.species=animalSpecies))
            .then(() => this.setState(newState))

    }


    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList {...props}
                        deleteAnimal={this.deleteAnimal}
                        animals={this.state.animals}
                        species={this.state.species}
                        employees={this.state.employees}
                        animalSpecies={this.state.animalSpecies} />
                }} />
                <Route path="/animals/new" render={(props) => {
                    return <AnimalForm {...props}
                        addAnimal={this.addAnimal}
                        employees={this.state.employees}
                        species={this.state.species}
                        animals={this.state.animals}
                        animalSpecies={this.state.animalSpecies} />


                }} />
                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    return <AnimalDetail {...props}
                    deleteAnimal={this.deleteAnimal}
                    animals={this.state.animals}/>
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route path="/employees/:employeeId(\d+)" render={(props) => {
                    return <EmployeeDetail {...props} deleteEmployee={this.deleteEmployee} employees={this.state.employees} />
                }} />
                <Route exact path="/owners" render={(props) => {
                    return <OwnerList owner={this.state.owners} />
                }} />
                <Route path="/owners/:ownerId(\d+)" render={(props) => {
                    return <OwnerDetail {...props} deleteOwner={this.deleteOwner} owners={this.state.owners} />
                }} />

            </React.Fragment>
        )
    }
}