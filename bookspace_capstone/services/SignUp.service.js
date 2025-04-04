import {createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../src/config/firebase";

export const signUpUserWithEmailAndPassword = async( email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log('successfully sign up!', user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('something went wrong!', errorCode, errorMessage)
    // ..
  })
}
//Sign In
export const signInWithEmailAndPassword = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log('successfully signed In!', user)

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('something went wrong', errorCode, errorMessage);
  });
}

export const logOut = () => {
  signOut(auth).then(() => { 
    console.log('successfully sign Out')
    // Sign-out successful.
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // An error happened.
    console.log('something went wrong', errorCode, errorMessage);
  }); 
  
}