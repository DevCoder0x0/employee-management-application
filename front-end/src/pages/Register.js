import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Register = ({login, createEmployee}) => {
    const navigate = useNavigate();

    useEffect(() => {
        if(login) {
            navigate("/portal")
        }
    }, [login, navigate])

    function onSubmit(e) {
        e.preventDefault();
        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        createEmployee(firstName, lastName, email, password);
    }

    return (
        <div className="register">
            <h1>Register Page</h1>
            <form className="register-form" onSubmit={ onSubmit }>
                <div className="form-group">
                    <label htmlFor="first-name">First Name</label>
                    <input id="first-name" type="text" placeholder="Enter First Name" required></input>
                </div>
                <div className="form-group">
                    <label htmlFor="last-name">Last Name</label>
                    <input id="last-name" type="text" placeholder="Enter Last Name" required></input>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" placeholder="Enter Email" required></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" placeholder="Enter Password" required></input>
                </div>
                <div className="form-group">
                    <button id="register-button">Register</button>
                </div>
            </form>
        </div>
    )
}

export default Register;