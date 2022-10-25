import { initializeApp } from "firebase/app";
import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import firebaseConfig from "../FirebaseConfig/FirebaseConfig";

initializeApp(firebaseConfig)

const Firebase = () => {
    const [user,setUser] = useState(null)
    const [error,setError] = useState('')
    const [loading,setLoading] = useState(true)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const loginWithGoogle = () => {
       return signInWithPopup(auth,googleProvider)  
    }

    //create user 
    const createUserWithEmail = (email,password) => {
        return  createUserWithEmailAndPassword(auth,email,password)
      }
    //   update user
    const updateUser = (profile) => {
       return updateProfile(auth.currentUser,profile )
    }
    // login with email
    const loginWithEmail = (email,password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // github login
    const loginWithGithub = () => {
         signInWithPopup(auth,githubProvider)
         .then(result => {
            const user = result.user
            setUser(user)
            setError("")
        })
        .catch(error => {
            const errorMessage = error.message;
            setError(errorMessage)
        })
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
               console.log(user.uid)
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
        loading,
        updateUser,
        loginWithGithub
    }
}

export default Firebase;