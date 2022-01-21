import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Login = ({ setIsAuthenticated }) => {
    const adminEmail = "admin@example.com";
    const adminPassword = "password";

    const [email, setEmail] = useState("admin@example.com");
    const [password, setPassword] = useState("password");

    const handleLogin = e => {
        e.preventDefault();

        if (email === adminEmail && password === adminPassword) {
            Swal.fire({
                timer: 1500,
                showConfirmButton: false,
                willOpen: () => {
                    Swal.showLoading();
                },
                willClose: () => {
                    setIsAuthenticated(true);

                    Swal.fire({
                        icon: "success",
                        title: "Successfully logged in!",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                },
            });
        } else {
            Swal.fire({
                timer: 1500,
                showConfirmButton: false,
                willOpen: () => {
                    Swal.showLoading();
                },
                willClose: () => {
                    Swal.fire({
                        icon: "error",
                        title: "Error!",
                        text: "Incorrect email or password",
                        showConfirmButton: true,
                    });
                },
            });
        }
    };

    return (
        <div className="small-container">
            <form onSubmit={handleLogin}>
                <h1>Admin Login</h1>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="admin@example.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <input style={{ marginTop: "12px" }}
                    type="submit"
                    value="Login"
                />
            </form>
        </div>
    );
};

export default Login;