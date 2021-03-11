import React, { Component } from 'react';
import "./login.css";
import { Button } from 'react-bootstrap'
import Logo from '../src/Images/Logo.png'


class Login extends Component {
    render() {
        return (
            <div classname='field'>
                 <div classname='row'>
                 <nav class="navbar navbar-inverse">
                     <a class="btn btn-navbar" data-toggle='collapse' data-target=".nav-collapse">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        </a>
                     
                    
                 
             <ul class="nav">
                <li class="active"><a href="#">Home</a></li>
                <li><a href="#">What's new</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
   
    
        </nav>
             
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
                    />
                    </p> 

                    <a href='/register'><Button onSubmit variant="primary">Login</Button></a>
                    <a href='/login'><Button onSubmit variant="primary">Register</Button></a>
                    <a href='/contact'><Button onSubmit variant="primary">Cart</Button></a>
                   
                   


                </form>
            

                </header>
                </div>

        );
    }
}

export default Login;



