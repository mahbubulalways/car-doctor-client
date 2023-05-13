import  { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext=createContext()
const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [users,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const provider = new GoogleAuthProvider();
    const handleCreateUserPassword=(email,password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }
    const handleLoginPassword=(email,password)=>{
        setLoading(true)
       return signInWithEmailAndPassword(auth,email,password)
    }
    const logout=()=>{
        setLoading(true)
       return signOut(auth)
    }
    
    const handleGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)

    }
    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        setLoading(false)
        if(currentUser?.email){
            const loggedUser={email:currentUser.email}
            fetch('https://carhub-server.vercel.app/token',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(loggedUser)
            })
            .then(res=>res.json())
            .then(data=>{
            //local storage is not best place to save token
            localStorage.setItem('access token',data.token)
              
            })
        }

      });
      return ()=> unsubscribe()
    }, [])

    const authInfo={
        users,
        loading,
        handleCreateUserPassword,
        handleLoginPassword,
        handleGoogle,
        logout
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;