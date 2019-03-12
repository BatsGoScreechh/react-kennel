export default {
    get(id) {
        return fetch(`http://localhost:5002/species/species/${id}`).then(species => species.json())
    },
    getAll: () => {
        return fetch("http://localhost:5002/species")
            .then(species => species.json())
    },
    animalSpecies: () => {
        return fetch("http://localhost:5002/animals?_expand=species")
        .then(animalSpecies => animalSpecies.json())
    }
}