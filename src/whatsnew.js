import React, { Component } from 'react';
import "./login.css";
import { Button } from 'react-bootstrap'
import Logo from '../src/Images/Logo.png'


class Whatsnew extends Component {
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
                <li class="active"><a href="/home">Home</a></li>
                <li><a href="/whatsnew">What's new</a></li>
                <li><a href="/product">Products</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
   
    
        </nav>
             
          </div>
                
                <img src={Logo} alt='Logo'></img>
                <header classname="field-header">
                
                    <a href='/register'><Button onSubmit variant="primary">Login</Button></a>
                    <a href='/login'><Button onSubmit variant="primary">Register</Button></a>
                    <a href='/contact'><Button onSubmit variant="primary">Cart</Button></a>
                   
                   


                
            

                </header>
                </div>

        );
    }
}

export default Whatsnew;