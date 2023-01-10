import React, { Component } from 'react'
import './Form.css';

class Form extends Component {
    render() {
        return (
            <form className="loginForm">
                <input type="text" placeholder="username" />
                <input type="text" placeholder="password" />
                <select>
                    <option>Admin</option>
                    <option>Developer</option>
                    <option>Trainer</option>
                </select>
                <input type="submit" style={{ background: 'red', color: 'blue', fontSize: '20px' }} />
            </form>
        )
    }
}

export default Form;