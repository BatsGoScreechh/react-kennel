export default {
    get(id) {
        return fetch(`http://localhost:5002/employees/${id}`).then(employees => employees.json())
    },
    getAll: () => {
        return fetch("http://localhost:5002/employees")
            .then(employees => employees.json())
    },

    getByEmail: (email) => {
        return fetch(`http://localhost:5002/employees?email=${email}`)
            .then(e => e.json())
    },

    deleteEmployee: id => {
        return fetch(`http://localhost:5002/employees/${id}`, {
            method: "DELETE"
        }).then(employees => employees.json)
    },

    postEmployee(newEmployee) {
        return fetch(`http://localhost:5002/employees`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newEmployee)
        }).then(data => data.json());
      }
    }

