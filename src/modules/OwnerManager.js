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
    },
    searchOwner: id => {
        return fetch(`http://localhost:5002/owners/${id}?_expand=animal`)
        .then(response => response.json())  // Parse as JSON
    },
    postOwner(newOwner) {
        return fetch(`http://localhost:5002/owners`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newOwner)
        }).then(data => data.json())
      }
}