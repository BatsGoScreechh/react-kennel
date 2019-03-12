import React, { Component } from "react"
import "./Animal.css"
import dog from "./DogIcon.png"


export default class AnimalDetail extends Component {

    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        const animal = this.props.animals.find(a => a.id === parseInt(this.props.match.params.animalId)) || {}
        // const species = this.props.species.find(a => a.id === parseInt(this.props.match.params.speciesId)) || {}

        // const employee = this.props.employees.find(e => e.id === parseInt(this.props.match.params.employeeId)) || {}
        console.log(this.props)
        return (
            <section className="animals">
                <div key={animal.id} className="card">
                    <div className="card-body">
                        <h3 className="card-title">
                            <img src={dog} alt="" className="icon--dog" />
                            <p>{animal.name}</p>
                        </h3>
                        <h6>Breed</h6>{animal.breed}
                        <h6>Species</h6>{animal.species.name}
                        <hr></hr>
                        <h6>Caretaker</h6>{animal.employee.firstName} {animal.employee.lastName}
                        <br></br>
                        <a href="#"
                            onClick={()=>{this.props.deleteAnimal(animal.id)
                                this.props.history.push("/animals")}}
                            className="card-link">Delete</a>
                    </div>
                </div>
            </section>
        )

    }

}

