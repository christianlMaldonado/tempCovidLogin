import React, { useState } from "react";
import { Button } from 'react-bootstrap';

export default function Form() {
    const [user, setUser] = useState({ fullname: "", email: "", date: "" });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        // Alerts not working right
        // alert("Form submitted as: " + this.state.text + this.state.email + this.state.date )
        e.preventDefault();
        console.log("Form Submitted", user);
    };
    return (
        <div className="container">
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="fullname">Full Name</label>
                    <input
                        type="text"
                        name="fullname"
                        onChange={handleChange}
                        autoComplete="off"
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        autoComplete="off"
                    />
                    <label htmlFor="password">Passoword</label>
                    <input
                        type="date"
                        name="date"
                        onChange={handleChange}
                        autoComplete="off"
                    />
                    <div className="submit-btn">
                        <Button variant="dark" type="submit">Register</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
