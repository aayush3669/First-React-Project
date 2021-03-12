import React, { Component } from 'react';
import "./login.css";
import { Button } from 'react-bootstrap'




class About extends Component {
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
         <li><a href="/whatsnew">What's new</a></li>
         <li><a href="/product">Products</a></li>
         <li><a href="/about">About</a></li>
         <li><a href="/contact">Contact</a></li>
     </ul>


 </nav>
      
   </div>
          
          <div class="row">  
          <img src="https://mdbootstrap.com/img/Others/documentation/1.jpg" className="img-fluid" alt="" style={{width:"50%", height:"70%"}} alt="trumpet"  />
          <img class="thumb" src="http://www.nycoffee.com/order/images/Blackened-Chicken-Fettuccine-Alfredo.jpg" alt="" title=""></img>
            <p>This image shows peace.</p>
          
                    <a href='/register'><Button onSubmit variant="primary">Login</Button></a>
                    <a href='/login'><Button onSubmit variant="primary">Register</Button></a>
                    <a href='/contact'><Button onSubmit variant="primary">Cart</Button></a>

          </div>
          </div>
        )
    }
}
export default About;