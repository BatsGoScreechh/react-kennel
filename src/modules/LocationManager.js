export default {
    get(id) {
        return fetch(`http://localhost:5002/locations/locations/${id}`).then(locations => locations.json())
    },
    getAll: () => {
        return fetch("http://localhost:5002/locations")
            .then(locations => locations.json())
    }
}