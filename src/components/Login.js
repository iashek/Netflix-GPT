import React, { useState } from 'react'
import Header from './Header'
import { checkValidData } from "../utils/validate"
import { useRef } from 'react'
import { auth } from "../utils/firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    const handleButtonClick = () => {
        // validate the form data

        const message = checkValidData(email.current.value, password.current.value);
        // console.log(message);
        setErrorMessage(message);
        if (message) return;

        // Sign In Sign Up Logic
        if(!isSignInForm){
            // Sign Up Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(auth.currentUser, {
                        displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/57562968?v=4"
                      }).then(() => {
                        // Profile updated!
                        const {uid, email, displayName, photoURL} = auth.currentUser;
                        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
                        navigate("/browse");
                      }).catch((error) => {
                        // An error occurred
                        setErrorMessage(error.message);
                      });

                    console.log(user);
                    console.log(auth.currentUser);
                    // navigate("/browse");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode+"-"+errorMessage);
                });
        }
        else{
            // Sign In Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user)
                    navigate("/browse")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode+"-"+errorMessage);
                });
        }
    };

  return (
    <div>
        <Header />
        <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background_image" />
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
            <h1 className='text-3xl py-4 font-bold'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && <input ref={name} type="text" placeholder="Name" className="p-2 my-4 w-full bg-gray-700" />}
            <input ref={email} type="text" placeholder="Email Address" className="p-2 my-4 w-full bg-gray-700" />
            <input ref={password} type="password" placeholder="Password" className="p-2 my-4 w-full bg-gray-700" />
            <p className='text-red-600 font-bold text-lg  py-2'>{errorMessage}</p>
            <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>{isSignInForm? "Sign In" : "Sign Up"}</button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now."}</p>
        </form>
    </div>
  )
}

export default Login