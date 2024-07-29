// DisplayData.js

import { Link } from 'react-router-dom';
import React from 'react';
import './DisplayData.css';
import { useNavigate } from 'react-router-dom';

const DisplayData = (props) => {
      const history = useNavigate(); 

    const handleDelete = (id) => {
        fetch(`http://localhost:8000/employees/${id}`, {
            method: 'DELETE'
        })
        .then(() => {
            history("/")
            console.log(`Employee with ID ${id} deleted successfully`);
           
        })
        .catch(error => {
            console.error(`Error deleting employee with ID ${id}:`, error);
        });
    };

    return (
        <div className="card">
            <Link to={`/employees/${props.id}`}>
                <h2>Employee Details</h2>
                <ul>
                    <li><strong>ID:</strong> {props.id}</li>
                    <li><strong>Name:</strong> {props.name}</li>
                    <li><strong>Company:</strong> {props.company}</li>
                    <li><strong>Position:</strong> {props.position}</li>
                </ul>
            </Link>
            <button onClick={() => handleDelete(props.id)}>Delete</button>
        </div>
    );
}

export default DisplayData;
