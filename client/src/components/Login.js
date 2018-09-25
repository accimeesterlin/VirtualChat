import React from 'react';
import { Route, Redirect } from 'react-router'
import { Link, BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import Profile from './Profile';




export default class Login extends React.Component {
    state = {
        email: '',
        password: '',
        validLoggin: false,
        profile: {}

    };

    // componentDidMount = () => {

    // }
    // componentDidUpdate = (prevprops, prevstate) => {
    //     if ((prevstate.validLoggin !== this.state.validLoggin) && this.state.validLoggin) {
    //         <Redirect to='/profile' />;
    //     }

    // }

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({ [name]: value });
    }

    onSubmit = (event) => {
        event.preventDefault();
        const email = this.state.email;
        const password = this.state.password;

        axios({
            url: '/login',
            method: 'POST',
            data: {
                email: this.state.email,
                password: this.state.password
            }
        })
            .then((response) => {
                alert('It is working, you are logged in');
                console.log('Login Response = ', response);
                console.log("login response.data = ", response.data)


                // axios.get('/profile/', {
                //     params: {
                //         email: email
                //     }
                // axios.get('/profile', {


                // })
                axios.get(`/profile/${email}`)
                    .then((res2) => {
                        console.log("Profile info");
                        console.log(res2);
                        this.setState({ validLoggin: true, profile: res2.data });
                        console.log("loggin boolean", this.state.validLoggin)

                        console.log("after redirect");




                    })
                    .catch(function (error) {
                        console.log('Error getting the profile on login', error);
                        console.log('getting profile error response= ', error.response.data.message);
                    });



            })
            .catch((err) => {
                alert('Not able to log in - try again');
                console.log('login error = ', err);
                console.log('login error response= ', err.response.data.message);
                console.log("error message", err.message);
            });
    }

    render() {

        console.log('State: ', this.state);
        if (this.state.validLoggin) {
            console.log("In the IF statement", this.state.profile);
            return (<Redirect to={{
                pathname: '/profile',
                state: this.state.profile
            }} />);
        }
        return (
            <div>

                <div>
                    <Link to='/'>Go to Home</Link>
                    <br />
                    <Link to='/signup'>Go to SignUp</Link>
                    <br />
                    <Link to='/profile'>Go to Profile</Link>
                    <h2>Login Form</h2>
                    <form onSubmit={this.onSubmit}>
                        <div>
                            <label htmlFor=""></label>
                            <input type="email" name='email' placeholder='email' onChange={this.handleChange} />
                        </div>
                        <div>
                            <label htmlFor=""></label>
                            <input type="password" name='password' placeholder='password' onChange={this.handleChange} />
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}