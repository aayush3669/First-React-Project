import React, {Component} from 'react';

class Hello2 extends Component {
    render(){
        return(
            <div className='state'>
                <input
                 type='name'
                 placeholder='Name'
                />
                <input
                 type='number'
                 placeholder='Phone'
                />
                <input
                 type='email'
                 placeholder='Email'
                />
                <input
                 type='password'
                 placeholder='Password'
                />

                <a href='/'><button>Register</button></a>
            </div>
        )
    }
}

export default Hello2;