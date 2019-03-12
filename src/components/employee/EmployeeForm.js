import React, { Component } from "react";
import "./Animal.css";

export default class AnimalForm extends Component {
    // Set initial state
    state = {
        animalName: "",
        breed: "",
        employeeId: "",
        speciesId: "",
        ownerId: "",
    };

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*
          Local method for validation, creating animal object, and
          invoking the function reference passed from parent component
       */
    constructNewAnimal = evt => {
        evt.preventDefault();
        if (this.state.employee === "") {
            window.alert("Please select a caretaker");
        } else {
            const animal = {
                name: this.state.animalName,
                breed: this.state.breed,
                speciesId: parseInt(this.state.speciesId),
                // Make sure the employeeId is saved to the database as a number since it is a foreign key.
                employeeId: parseInt(this.state.employeeId),
                ownerId: parseInt(this.state.ownerId)
            };
            const owner = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                address: this.state.address
            }

            // Create the animal and redirect user to animal list
            this.props
                .addAnimal(animal)
                .addOwner(owner)
                .then(() => this.props.history.push("/animals"));
        }
    };

    render() {
        return (
            <React.Fragment>
                <form className="animalForm">
                    <div className="form-group">
                        <label htmlFor="animalName">Animal name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="animalName"
                            placeholder="Animal name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="breed">Breed</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="breed"
                            placeholder="Breed"
                        />
                    </div>


                    <div className="form-group">
                        <label htmlFor="species">Species</label>
                        <select
                            defaultValue=""
                            name="species"
                            id="speciesId"
                            onChange={
                                this.handleFieldChange
                            }
                        >
                            <option value="">Select a species</option>
                            {this.props.species.map(s => (
                                <option key={s.id} id={s.id} value={s.id}>
                                    {s.name}
                                </option>
                            ))}
                        </select>
                    </div>


                    <div className="form-group">
                        <label htmlFor="employee">Assign to caretaker</label>
                        <select
                            defaultValue=""
                            name="employee"
                            id="employeeId"
                            onChange={this.handleFieldChange}
                        >
                            <option value="">Select an employee</option>
                            {this.props.employees.map(e => (
                                <option key={e.id} id={e.id} value={e.id}>
                                    {e.name}
                                </option>
                            ))}
                        </select>
                    </div>
{/* Owner portion of the form */}


{/* End Owner portion */}
                    <button
                        type="submit"
                        onClick={this.constructNewAnimal}
                        className="btn btn-primary"
                    >
                        Submit
          </button>
                </form>
            </React.Fragment>
        );
    }
}