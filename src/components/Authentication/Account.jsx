import React, {useState} from "react";
import { auth } from "../../../src/firebase.js"
import { createUserWithEmailAndPassword } from "firebase/auth";

function Account() {

  const [signUpSuccess, setSignUpSuccess] = useState(null);

  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSignUpSuccess(`You've successfully signed up, ${userCredential.user.email}!`)
      })
      .catch((error) => {
        setSignUpSuccess(`There was an error signing up: ${error.message}!`)
      });
  }

  
  return (
    <div id="login-form">
      <div id="login-box">
      <img className="login-logo" src="./assets/img/logo.png"/>
        <h1>Sign up</h1>
        {signUpSuccess}
        <form onSubmit={doSignUp}>
          <input
            type='text'
            name='email'
            placeholder='Email Address' /><br/><br/>
          <input
            type='password'
            name='password'
            placeholder='Password' /><br/><br/>
          <button type='submit'>Sign up</button>
        </form>
      </div>
    </div>
  );
}
export default Account;