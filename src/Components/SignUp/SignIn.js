import React, {useContext, useState} from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import NavBar from '../NavBar/NavBar';
import {UserContext} from '../../App';
import {Link, useHistory, useLocation} from 'react-router-dom';
const SignUp = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const {from} = location.state || {
        from: {
            pathname: "/"
        }
    };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    var provider = new firebase.auth.GoogleAuthProvider();
    const [newUser,setNewUser] = useState(false)
    const [user,setUser] = useState({
        isSignedIn: false,
        newUser:false,
        name: '',
        email: '',
        password: '',
        success: false,
        error: ''
    })

    // const handleGoogleSignIn = () => {
    //     firebase.auth().signInWithPopup(provider)
    //         .then(function (result) {
    //             var {displayName, email, password} = result.user;
    //             const signedInUser = {
    //                 isSignedIn: true,
    //                 name: displayName,
    //                 email,
    //                 password
    //             }
    //             console.log(signedInUser);
    //             setLoggedInUser(signedInUser);
    //             history.replace(from);
    //         })
    //         .catch(error =>{
    //             console.log(error.message);
    //         })
    // }
    const handleBlur = (e) => {
        let isFormValid = true;
        if (e.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value)
        }
        if (e.target.name === 'password' && e.target.name === 'confirm_password') {
            const validPasswordLength = e.target.value.length >= 8;
            const validPasswordNumber = /\d{1}/.test(e.target.value);
            isFormValid = validPasswordLength && validPasswordNumber;
        }
        
        if (isFormValid) {
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo)
        }
    }
    const handleSubmit = (e) => {
        // if (newUser && user.email && user.password) {
        //     firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        //         .then(res => {
        //             const newUser = {...user}
        //             newUser.success = true;
        //             newUser.error = '';
        //             setUser(newUser);
        //         })
        //         .catch(function (error) {
        //             const newUser = {...user}
        //             newUser.success = false;
        //             newUser.error = error.message;
        //             setUser(newUser);
        //         });
        // }
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUser = {...user}
                    newUser.success = true;
                    newUser.error = '';
                    setUser(newUser);
                    setLoggedInUser(newUser)
                    history.replace(from);
                })
                .catch(function (error) {
                    const newUser = {...user}
                    newUser.success = false;
                    newUser.error = error.message;
                    setUser(newUser);
                });
        }
        e.preventDefault()
    }
    return (
        <div>
            <NavBar></NavBar>
            <div style={{width:'50%',margin:'auto',display:'flex',flexDirection:'column'}}>
                <form action="" onSubmit={handleSubmit}>
                    <div className="group">
                        <label htmlFor="email">Email</label><br />
                        <input type="email" name="email" onBlur={handleBlur} required/>
                    </div>
                    <div className="group">
                        <label htmlFor="password">Password</label><br />
                        <input type="password" name="password" onBlur={handleBlur} required/>
                    </div>
                    <div className="group">
                        <label htmlFor="confirm_password">confirm Password</label><br />
                        <input type="password" name="confirm_password" onBlur={handleBlur} required/>
                    </div>
                    <input type="submit" value="Submit"/>
                </form>
            
            {/* <button onClick={()=>setNewUser(!newUser)}>log</button> */}
            <p>Don't have account? <Link to="/SignUp">Sign Up</Link></p>
            <div>
            </div>
            {/* {user.success
                ? <h2 style={{
                        color: "green"
                    }}>Successfully created</h2>
                : <h2 style={{
                    color: "red"
                }}>{user.error}</h2>
            } */}
            </div>
        </div>
    );
};

export default SignUp;