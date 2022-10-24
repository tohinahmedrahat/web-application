import { initializeApp } from "firebase/app";
import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import firebaseConfig from "../FirebaseConfig/FirebaseConfig";

initializeApp(firebaseConfig)

const Firebase = () => {
    const [user,setUser] = useState(null)
    const [error,setError] = useState('')
    const [loading,setLoading] = useState(true)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const loginWithGoogle = () => {
       return signInWithPopup(auth,googleProvider)  
    }

    //create user 
    const createUserWithEmail = (email,password) => {
        return  createUserWithEmailAndPassword(auth,email,password)
      }

    // login with email
    const loginWithEmail = (email,password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // log out or sing out
    const logOut = () => {
        signOut(auth)
        .then(user => {
            setUser({})
        })
        .catch(error => {
            console.error(error)
        })
    }

    useEffect(() => {
        const userChanged = onAuthStateChanged(auth, (user) => {
             if (user) {
               console.log(user.email)
                 setUser(user)
                 setLoading(false)
             } else {
              setUser({})
             }
           });
           return () => userChanged;
     },[])

    return{
        user,
        setUser,
        loginWithGoogle,
        setError,
        error,
        logOut,
        createUserWithEmail,
        loginWithEmail,
        loading
    }
}

export default Firebase;