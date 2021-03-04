import React, { Component } from 'react';

class Hello extends Component {
    render() {
        return (
            <div className='state'>
                <input
                    type='name'
                    placeholder='Name'
                />
                <input
                    type='password'
                    placeholder='Password'
                />

                <a href='/hello2'><button>Login</button></a>
            </div>
        )
    }
}

export default Hello;