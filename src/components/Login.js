import React, { useState } from 'react'
import Header from './Header'
import { checkValidData } from "../utils/validate"
import { useRef } from 'react'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    // const name = useRef(null);
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
    };

  return (
    <div>
        <Header />
        <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background_image" />
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
            <h1 className='text-3xl py-4 font-bold'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && <input type="text" placeholder="Name" className="p-2 my-4 w-full bg-gray-700" />}
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