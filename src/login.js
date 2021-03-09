import React, { Component } from 'react';
import "./login.css";
import { Button } from 'react-bootstrap'
import Logo from '../src/Images/Logo.png'


class Login extends Component {
    render() {
        return (
            <div classname='field'>
                
                <div style={{backgroundImage: "url(./123.html)"}}>
                </div>
                <img src={Logo} alt='Logo'></img>
                <header classname="field-header">
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

                    <a href='/register'><Button onSubmit variant="primary">Login</Button></a>
                   


                </form>
                
              

                </header>
                </div>

        );
    }
}

export default Login;



