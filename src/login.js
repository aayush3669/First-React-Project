
import React, { Component } from 'react';
import "./login.css";


class Login extends Component {
    render() {
        return (

            <div classname='field'>
                <h1>Login Below</h1>
                <form>
                   <p>
                   <input
                        type='username'
                        placeholder="Username"
                    /></p> 
                   <p>
                   <input
                        type='password'
                        placeholder="Password"
                    /></p> 

                </form>
                
                <a href='/register'><button>Login</button></a>
               


            </div >

        );
    }
}

export default Login;



