import React, { Component } from "react";
import ownerAvatar from "./OwnerIcon.png"
import "./Owner.css"
import { Link } from "react-router-dom";
export default class OwnerList extends Component {
  render() {

    return <section className="owners">
        {
            this.props.owner.map(owner =>

                <div key={owner.id} className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            <img src={ownerAvatar} alt="" className="icon--owner" />
                            <p className ="ownerName">{owner.firstName} {owner.lastName}</p>
                            <Link className="nav-link" to={`/owners/${owner.id}`}>Details</Link>

                        </h5>
                    </div>
                </div>
            )
        }
    </section>

}
}

