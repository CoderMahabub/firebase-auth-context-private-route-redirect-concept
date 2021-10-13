import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () => {
        //return for Redirect to the initial page after login
        return signInWithPopup(auth, googleProvider)

        //Normal Login
        // signInWithPopup(auth, googleProvider)
        //     .then(result => {
        //         setUser(result.user);
        //     })
    }

    // Observe wheather user auth state changed or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
        return unsubscribe;
    }, [])


    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch((error) => {
                setError("");
            });
    }



    //Returns
    return {
        googleSignIn,
        user,
        error,
        handleLogout
    }
}
export default useFirebase;