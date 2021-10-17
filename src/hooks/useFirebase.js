import React, { useEffect } from 'react';
import { useState } from 'react';
import initializeAuthentication from '../firebase/firebase.init';
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const auth = getAuth();

    const handleEmailChange = e => {
        setEmail(e.target.value)
        
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
        
    }

    const handleLoginForm = (e) => {
        e.preventDefault();
        return createUserWithEmailAndPassword(auth, email, password)
    }

//    useEffect(() => {
//    onAuthStateChanged(auth, (user) => {
//      if (user) {
//        setUser(user)
//      } 
//    });
//    } ,[])

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user?.email) {
          setUser(user);
        } else {
          setUser(null);
          setEmail("")
        }
      });
    }, []);

    const logout = () => {
        signOut(auth)
        console.log("logged out");
    }

    return {
        setUser,
        user,
        setEmail,
        email,
        setPassword,
        password,
        error,
        setError,
        handleEmailChange,
        handlePasswordChange,
        handleLoginForm,
        logout
    }
};

export default useFirebase;