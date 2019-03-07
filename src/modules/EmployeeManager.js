export default {
    get(id) {
        return fetch(`http://localhost:5002/employees/employees/${id}`).then(employees => employees.json())
    },
    getAll: () => {
        return fetch("http://localhost:5002/employees")
            .then(employees => employees.json())
    },
    deleteEmployee: id => {
        return fetch(`http://localhost:5002/employees/${id}`, {
            method: "DELETE"
        }).then(employees => employees.json)
    }
}