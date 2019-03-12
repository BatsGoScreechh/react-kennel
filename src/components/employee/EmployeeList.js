import React, { Component } from 'react';
import employeeAvatar from "./EmployeeIcon.png"
import "./Employee.css"
import { Link } from "react-router-dom";

export default class EmployeeList extends Component {
    render() {
        return <section className="employees">
            {
                this.props.employees.map(employee =>
                    <div key={employee.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <img src={employeeAvatar} alt="" className="icon--employee" />
                                <p className="employeeName">{employee.firstName} {employee.lastName}</p>
                                <p>{employee.title}</p>
                                <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link>

                            </h5>
                        </div>
                    </div>
                )
            }
        </section>

    }
}

