import React, { Component } from "react";
import ownerAvatar from "./OwnerIcon.png"
import "./Owner.css"
export default class OwnerList extends Component {
  render() {
    return <section className="owners">
        {
            this.props.owners.map(owner =>
                <div key={owner.id} className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            <img src={ownerAvatar} className="icon--owner" />
                            <p className ="ownerName">{owner.name}</p>
                            <a href="#"
                                onClick={() => this.props.deleteOwner(owner.id)}
                                className="card-link">Delete</a>
                        </h5>
                    </div>
                </div>
            )
        }
    </section>

}
}

