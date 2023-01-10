import axios from 'axios';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';

// import authService from '../../authService';
import './Login.scss'

class Login extends Component {

    constructor() {
        super()
        this.state = {
            formvalues: {}
        }
    }

    handleInputChange = (e) => {
        const { formvalues } = this.state;
        this.setState({
            formvalues: { ...formvalues, [e.target.name]: e.target.value }
        })
    }


    handleSubmit = async (e) => {
        e.preventDefault();
        const { formvalues } = this.state;
        const resp = await axios.post('http://localhost:8081/login', {
            body: {
                username: formvalues.username,
                password: formvalues.password
            }
        })

        if (resp.status == 200) {
            const cookies = new Cookies();
            console.log(resp)

            localStorage.setItem('authToken', resp.data.token);
            sessionStorage.setItem('authToken', resp.data.token);

            localStorage.getItem('authToken')
            sessionStorage.getItem('authToken')// 5MB

            cookies.set('authToken', resp.data.token); // 5kb data storage limit
            this.props.history.push('/bus-tickets')
        }
    }


    render() {
        const { formvalues } = this.state;
        console.log(formvalues)
        return (
            <div className="d-flex justify-content-center align-items-center login bg-light text-center">
                <form className="section" onSubmit={(e) => this.handleSubmit(e)}>
                    <h5 className="mb-4">Login Form</h5>
                    <div>
                        <input
                            type="text"
                            className="form-control py-2"
                            name="username"
                            placeholder="username"
                            onChange={this.handleInputChange}
                            autocomplete="off"
                            required
                        />
                    </div>
                    <div>
                        <input
                            className="form-control py-2"
                            type="password"
                            name="password"
                            placeholder="password"
                            onChange={this.handleInputChange}
                            autocomplete="off"
                            required
                        />
                    </div>
                    <input
                        type="submit"
                        value="Login"
                        className="btn btn-warning w-100"
                    />
                </form>

            </div>
        )
    }
}

export default withRouter(Login);