// NameForm.js

import React, { useState } from 'react';
import './Form.css'; // Import your CSS file for styling

const NameForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        position: ''
    });


    const [isPending,setIsPending] = useState(false)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsPending(true)
        // Assuming the ID should be automatically generated on the backend
        fetch('http://localhost:8000/employees', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        })
        .then(() => {
            console.log('Employee added successfully');
            setFormData({
                name: '',
                company: '',
                position: ''
            });
            setIsPending(false)
        })
        .catch(error => console.error('Error adding employee:', error));
    };

    return (
        <div className="main-container">
            <h1>Form Handling</h1>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    {/* ID field is removed */}
                    <div className="form-group">
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Company:</label>
                        <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Position:</label>
                        <input
                            type="text"
                            name="position"
                            value={formData.position}
                            onChange={handleChange}
                        />
                    </div>
                {!isPending && <button type="submit">Add Employee</button>}
                {isPending && <button type="submit" disabled>Adding Employee...</button>}
                </form>
            </div>
        </div>
    );
}

export default NameForm;
