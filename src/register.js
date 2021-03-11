
import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import Logo1 from '../src/Images/Logo1.png'


class Register extends Component {
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
                
                <img src={Logo1} alt='logo'></img>
                <h2>Register below</h2>
                <form>
                    <p>
                    <input
                        name='name'
                        placeholder="Name"
                    />
                    </p>
                    <p>
                    <input
                        name='emailID'
                        placeholder='EmailID'

                    />
                    </p>
                    <p>
                    <input
                        type='phoneno'
                        placeholder="PhoneNo"
                    />
                    </p>
                    <p>
                    <input
                        type='Username'
                        placeholder="Username"
                    />
                    </p>
                    <p>
                    <input
                        type='Password'
                        placeholder="Password"
                    />
                    </p>
                    <a href='/'><Button onSubmit variant="primary">Register</Button></a>
                </form>
                

            </div>



        )
    }


}

export default Register;