import React, { Component } from 'react';

class Location extends Component {
    render() {
        return (
            <article>
                <h1>Location List</h1>
                {this.props.locations.map((singleLocation) => {
                   return <div><p key={singleLocation.name}>{singleLocation.name}</p>
                    <p key ={singleLocation.name}>{singleLocation.address}</p>
                   </div>
                })}
            </article>
        );
    }
}

export default Location;