import { Route, Redirect } from "react-router-dom"
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
import Login from './authentication/Login'
import AnimalEditForm from "./animal/AnimalEditForm"
import EmployeeForm from "./employee/EmployeeForm";

export default class ApplicationViews extends Component {


    state = {
        animals: [],
        employees: [],
        locations: [],
        owners: [],
        species: [],

    }

    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

    // isAuthenticated() {
    //     const credentials = sessionStorage.getItem("credentials");
    //     if (credentials == null) {
    //         return true;
    //     }
    //     else {
    //         return true;
    //     }
    // }

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

    updateAnimal = (editedAnimalObject) => {
        return AnimalManager.put(editedAnimalObject)
            .then(() => AnimalManager.getAll())
            .then(animals => {
                this.setState({
                    animals: animals
                })
            });
    };

    registerEmployee = employeeObject =>
    EmployeeManager.postEmployee(employeeObject);

  refreshEmployees = () =>
    EmployeeManager.getAll().then(parsedEmps => {
      this.setState({ employees: parsedEmps });
    });

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

    addOwner = owner =>
        OwnerManager.postOwner(owner)
            .then(() => OwnerManager.getAll())
            .then(owners =>
                this.setState({
                    owners: owners
                })
            );


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
            .then((species => newState.species = species))
            .then(() => this.setState(newState))

    }


    render() {
        return (
            <React.Fragment>
                <Route path="/login" component={Login} />

                <Route exact path="/" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <LocationList {...props}
                            locations={this.state.locations} />
                    }
                    else {
                        return <Redirect to="/login"></Redirect>
                    }
                }} />

                <Route exact path="/animals" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <AnimalList {...props}
                            deleteAnimal={this.deleteAnimal}
                            animals={this.state.animals}
                            species={this.state.species}
                            employees={this.state.employees} />
                    }
                    else {
                        return <Redirect to="/login"></Redirect>
                    }
                }} />
                <Route path="/animals/new" render={(props) => {
                    return <AnimalForm {...props}
                        addAnimal={this.addAnimal}
                        employees={this.state.employees}
                        species={this.state.species}
                        animals={this.state.animals}
                        owners={this.state.owners}
                    />


                }} />
                <Route exact path="/animals/:animalId(\d+)" render={(props) => {
                    return <AnimalDetail {...props}
                        deleteAnimal={this.deleteAnimal}
                        animals={this.state.animals}
                    />
                }} />

                <Route
                    path="/animals/:animalId(\d+)/edit" render={props => {
                        return <AnimalEditForm {...props}
                            employees={this.state.employees}
                            species={this.state.species}
                            updateAnimal={this.updateAnimal} />
                    }}
                />

                <Route exact path="/employees" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <EmployeeList {...props}

                            employees={this.state.employees} />
                    }
                    else {
                        return <Redirect to="/login"></Redirect>
                    }
                }} />

                <Route path="/employees/:employeeId(\d+)" render={(props) => {
                    return <EmployeeDetail {...props} deleteEmployee={this.deleteEmployee} employees={this.state.employees} />
                }} />
                <Route
                    path="/register"
                    render={props => {
                        return (
                            <EmployeeForm
                                {...props}
                                registerEmployee={this.registerEmployee}
                                refreshEmployees={this.refreshEmployees}
                            />
                            );
                        }}
                      />
                            <Route exact path="/owners" render={(props) => {
                                if (this.isAuthenticated()) {
                                    return <OwnerList {...props}

                                        owner={this.state.owners} />
                                }
                                else {
                                    return <Redirect to="/login"></Redirect>
                                }
                            }} />

                            <Route path="/owners/:ownerId(\d+)" render={(props) => {
                                return <OwnerDetail {...props} deleteOwner={this.deleteOwner} owners={this.state.owners} />
                            }} />
            </React.Fragment>
            )

        }
    }
