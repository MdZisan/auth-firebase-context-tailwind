import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';



export const AuthContext = createContext(null) 
const auth  = getAuth(app);
const  googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
 const [user,setUser] = useState(null)
 const [loading,setLoading] = useState(true)

 const signInwithGoogle = () =>{
   return signInWithPopup(auth,googleProvider);
 }

const createUser =(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
}
const signIn = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
}

const logOut = ()=>{
    return signOut(auth)
}
 const authInfo = {
   createUser,signIn,user,logOut,loading,signInwithGoogle
 }

 useEffect(()=>{
  const unsubscribe =  onAuthStateChanged(auth,currentUser=>{
        console.log('auth state change',currentUser);
        setUser(currentUser)
        setLoading(false)
    })
    return ()=>{
        unsubscribe()
    }
 },[])

    
    return (
        <>
         <AuthContext.Provider value={authInfo} >
            {children}
            </AuthContext.Provider>   
        </>
    );
};

export default AuthProvider;