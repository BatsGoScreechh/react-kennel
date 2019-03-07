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



export default class ApplicationViews extends Component {


    state = {
        animals: [],
        employees: [],
        locations: [],
        owners: [],
    }

    deleteAnimal = id => {
        return AnimalManager.deleteAnimal(id)
            .then(() => AnimalManager.getAll())
            .then(animals => this.setState({
                animals: animals
            })
            )
    }

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
                        .then(() => this.setState(newState))

    }



    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route path="/animals" render={props => {
                    return <AnimalList deleteAnimal={this.deleteAnimal} animals={this.state.animals} />;
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList deleteEmployee={this.deleteEmployee} employees={this.state.employees} />
                }} />
                <Route exact path="/owners" render={(props) => {
                    return <OwnerList deleteOwner={this.deleteOwner} owners={this.state.owners} />
                }} />

            </React.Fragment>
        )
    }
}