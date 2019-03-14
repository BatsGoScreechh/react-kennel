import React, { Component } from "react"
import "./Owner.css"
import ownerAvatar from "./OwnerIcon.png"


export default class OwnerDetail extends Component {
    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        const owner = this.props.owners.find(o => o.id === parseInt(this.props.match.params.ownerId)) || {}

        return (
            <section className="owners">
                <div key={owner.id} className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            <img src={ownerAvatar} alt="" className="icon--owner" />
                            <p className="ownerName">
                                {owner.firstName} {owner.lastName}

                            </p>
                        </h5>
                        <p className="card-title">{owner.address}</p>
                        <a href="#"
                            onClick={() => this.props.deleteOwner(owner.id)
                                .then(() => this.props.history.push("/owners"))}
                            className="card-link">Delete</a>
                    </div>
                </div>
            </section>
        )
    }
}