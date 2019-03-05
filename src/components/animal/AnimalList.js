import React, { Component } from 'react';

class Animal extends Component {
    render() {
        return (
            <article>
                <h1>Animal List</h1>
                {this.props.animals.map((singleAnimal) => {
                    return <div>
                        <ul>
                        <li key={singleAnimal.id}>Name: {singleAnimal.name}</li> <p>Species: {singleAnimal.species}</p>
                    </ul>
                </div>
                })}
            </article>
        );
    }
}

export default Animal;