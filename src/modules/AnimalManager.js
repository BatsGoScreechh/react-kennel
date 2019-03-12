export default {
    get(id) {
        return fetch(`http://localhost:5002/animals/animals/${id}`).then(animals => animals.json())
    },
    getAll: () => {
        return fetch("http://localhost:5002/animals?_expand=species&_expand=employee")
            .then(animals => animals.json())
    },
    deleteAnimal: id => {
        return fetch(`http://localhost:5002/animals/${id}`, {
            method: "DELETE"
        }).then(animals => animals.json)
    },
    postAnimal(newAnimal) {
        return fetch("http://localhost:5002/animals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newAnimal)
        }).then(data => data.json())
    }
}