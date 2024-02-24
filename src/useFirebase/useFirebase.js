/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../Component/firebase/firebase.initialize";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, provider);
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        });
    }, [])

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch(error => {
                console.log(error);
            })
    }

    return{
        signInUsingGoogle,
        logOut,
        user,
        setUser,
    }
}

export default useFirebase;