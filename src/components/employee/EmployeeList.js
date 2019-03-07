import React, { Component } from 'react';
import employeeAvatar from "./EmployeeIcon.png"
import "./Employee.css"

export default class EmployeeList extends Component {
    render() {
        return <section className="employees">
            {
                this.props.employees.map(employee =>
                    <div key={employee.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <img src={employeeAvatar} className="icon--employee" />
                                <p className ="employeeName">{employee.name}</p>
                                <a href="#"
                                    onClick={() => this.props.deleteEmployee(employee.id)}
                                    className="card-link">Delete</a>
                            </h5>
                        </div>
                    </div>
                )
            }
        </section>

    }
}

