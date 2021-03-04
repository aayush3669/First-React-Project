import React from 'react';
import "./style.css";

export default class Form extends React.Component {
    state = {
     firstname: '',
     lastname: '',
     username: '',
     email:'',
     password:'',
    
    };
    change = (e) =>{
        this.setState({
           [e.target.name]: e.target.value 
        });

    };
    onSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state);
    }
    render(){
        return(
            
            <form>
                <h1>Please Fill The Form Below</h1>
                
                <input
                className='field'
                name='firstname'
                 placeholder="First name"
                 value={this.state.firstname} 
                 onChange={e => this.change(e)
                }
                 />
                 <br />
                 <input
                 className='field'
                 name='lastname'
                 placeholder="last name"
                 value={this.state.lastname} 
                 onChange={e => this.change(e)}
                 />
                 <br />
                 <input
                 className='field'
                 name='username'
                 placeholder="username"
                 value={this.state.username} 
                 onChange={e => this.change(e)}
                 />
                 <br />
                 <input
                 className='field'
                 name='email'
                 placeholder="email"
                 value={this.state.email} 
                 onChange={e => this.setState({ email:e.target.value})}
                 onChange={e => this.change(e)}
                 />
                 <br />
                 <input
                 className='field'
                 name='password'
                 type='password'
                 placeholder="Password"
                 value={this.state.Password} 
                 onChange={e => this.setState({ Password:e.target.value})}
                 onChange={e => this.change(e)}
                 />
                 <br />
                 <button className='field' onClick={() => this.onSubmit()}> Submit</button>
            </form>
        )
    }
}
