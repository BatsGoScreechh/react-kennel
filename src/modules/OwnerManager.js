export default {
    get(id) {
        return fetch(`http://localhost:5002/owners/owners/${id}`).then(owners => owners.json())
    },
    getAll: () => {
        return fetch("http://localhost:5002/owners")
            .then(owners => owners.json())
    },
    deleteOwner: id => {
        return fetch(`http://localhost:5002/owners/${id}`, {
            method: "DELETE"
        }).then(owners => owners.json)
    }
}