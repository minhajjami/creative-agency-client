import React, { useContext, useState } from 'react';
import logo from '../../../images/logos/logo.png';
import google from '../../../images/logos/sign-in-google.png'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const baseUrl = 'https://hidden-crag-90889.herokuapp.com';

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const checkIsAdmin = (signedInUser) => {
        const newUser = {...signedInUser};

        fetch('https://hidden-crag-90889.herokuapp.com/getAdmin?email='+signedInUser.email, {
            method: 'GET'
        })
        .then(res => res.json())
        .then(result => {
                console.log(result);
                result.length>0 ? newUser.isAdmin = true : newUser.isAdmin = false;
                console.log(newUser.isAdmin);
                setLoggedInUser(newUser);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider).then(function (result) {
            const { displayName,email,photoURL } = result.user;
            const signedInUser = { name: displayName, email ,image : photoURL };
            console.log(signedInUser)
            checkIsAdmin(signedInUser);
            setLoggedInUser(signedInUser);
            history.replace(from);
        }).catch(function (error) {
            console.log(error)
        });
    }

    return (
        <div className="container ">
             <div className="text-center mt-5">
                <Link to='/'><img src={logo} alt="" style={{ width: "250px" }} className="m-2"></img></Link>
            </div>
            <div className="login-form mx-auto">
                    <h5 className="text-center mt-5 pb-5">Login With</h5>
                    <div className="d-flex social-btn mx-auto mt-5" onClick={handleGoogleSignIn}>
                            <img src={google} alt="google" className="img img-fluid social-img m-2" />
                            <p className="mt-2 mx-auto"> Continue with Google</p>
                    </div>
                    <p className="text-center mt-2">Don't have an account? <strong className="login-tag text-info">Create an account</strong> </p>
                </div>
        </div>
    );
};

export default Login;