import React, { Component } from 'react';

class Location extends Component {
    render() {
        return (
            <article>
                <h1>Location List</h1>
                {this.props.locations.map((location) => {
                   return <div><p key={location.name}>{location.name}</p>
                    <p key ={location.name}>{location.address}</p>
                   </div>
                })}
            </article>
        );
    }
}

export default Location;