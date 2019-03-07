export default {
    get(id) {
        return fetch(`http://localhost:5002/animals/animals/${id}`).then(animals => animals.json())
    },
    getAll: () => {
        return fetch("http://localhost:5002/animals")
            .then(animals => animals.json())
    },
    deleteAnimal: id => {
        return fetch(`http://localhost:5002/animals/${id}`, {
            method: "DELETE"
        }).then(animals => animals.json)
    }
}