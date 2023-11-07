import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../config/firebaseConfig";


export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true);

    // google login
    const googleLogin = () =>{
       return signInWithPopup(auth, googleProvider)
    }

    // sign up
    const createUserAndUpdate = async(email, password,displayName,photoURL) => {
        setLoading(true);
        await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(auth.currentUser,{displayName,photoURL})
    }



    // sign in user
    const signin = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    // using observer
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false);
        })
    }, [])

    console.log(user);

    const authentications = {
        googleLogin,
        createUserAndUpdate,
        loading,
        signin,
        logOut,
        user
    }

    
    return (
        <AuthContext.Provider value={authentications}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;