import React, { Component } from 'react';
import "./login.css";
import { Button } from 'react-bootstrap'
import Logo from '../src/Images/Logo.png'
class Contact extends Component {
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
           <li><a href="/What's new">What's new</a></li>
           <li><a href="/product">Products</a></li>
           <li><a href="/about">About</a></li>
           <li><a href="/contact">Contact</a></li>
       </ul>


   </nav>
        
     </div>
          <img src={Logo} alt='Logo'></img>
                <header classname="field-header">
                <h1>Contact Below</h1>  
                <form>
                   <p>
                   <input
                        type='username'
                        placeholder="Username"
                    /></p> 
                    <p>
                   <input
                        type='phonenumber'
                        placeholder="PhoneNo."
                    />
                    </p> 
                   <p>
                   <input
                        type='password'
                        placeholder="Password"
                    />
                    </p>
                    

                    <a href='/home'><Button onSubmit variant="primary">Submit</Button></a>
                    
                    </form>
            

                </header>
          </div>
          )
    }
}

export default Contact;