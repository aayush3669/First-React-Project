
import React, { Component } from 'react';
import "./login.css";

class Login extends Component {
    render() {
        return (

            <div classname='field'>
                <h1>Login Below</h1>
                <form>
                    <input
                        type='username'
                        placeholder="Username"
                    />
                    <input
                        type='password'
                        placeholder="Password"
                    />

                </form>
                
                <a href='/register'><button>Login</button></a>

            </div >

        );
    }
}

export default Login;



