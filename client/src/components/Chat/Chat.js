import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import './Chat.css';
import { Route, Redirect } from 'react-router'
import axios from 'axios';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';


export default class Chat extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            profile: {
                age: props.location.state.age,
                displayname: props.location.state.displayname,
                email: props.location.state.email,
                password: props.location.state.password,
                yourname: props.location.state.yourname,
                city: props.location.state.city,
                yourstate: props.location.state.yourstate,
                profilepic: props.location.state.profilepic
            },
            redirectToProfile: false
        }
        // };

        // set state to the initial state
        //this.state = this.currentProfile;
        // this.state = { ...this.initialState };
        // const originalState = this.state;
        console.log("In the constructor for CHAT", this.props.location) //undefined

        console.log("name ", this.props.location.state.displayname);
        console.log("email ", this.props.location.state.email);
        console.log("password ", this.props.location.state.password);
        console.log("yourname ", this.props.location.state.yourname);
        console.log("city ", this.props.location.state.city);
        console.log("age ", this.props.location.state.age);
        console.log("yourstate ", this.props.location.state.yourstate);
        console.log("profilepic ", this.props.location.state.profilepic);
        console.log("This.state in the chat room = ", this.state);

        // console.log("Original State = ", originalState);
    };

    gotoProfile = () => {
        // event.preventDefault();
        console.log("I am in goto Profile function");




        this.setState({
            redirectToProfile: true
        });
    }

    render() {
        if (this.state.redirectToProfile) {
            console.log("In the IF statement in the chat component", this.state.profile);
            // if valid LogIn, redirect to the profile page
            return (<Redirect to={{
                //pathname: '/profile',
                pathname: '/profile',
                state: this.state.profile
            }} />);
        }
        return (
            <div>
                <Navbar></Navbar>
                <h1 className="HUMP"><span className="RecluseWord">Recluse</span><span className="LetLooseWord"> Let Loose</span></h1>
                <h1>my chat room</h1>
                <Link to='/'>Go to Home</Link>
                <br />
                <Link to='/signup'>Go to SignUp</Link>
                <br />
                {/* <Link to='/profile'>Go to Profile</Link> */}
                <button className="gotoProfile" type="button" onClick={this.gotoProfile} >GoTo Profile</button>

                <Footer></Footer>
            </div>
        );
    }
}