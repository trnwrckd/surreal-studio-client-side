import { useEffect, useState } from "react";
import authInit from '../Firebase/firebase-init';
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword , updateProfile} from "firebase/auth";

// initiate authentication
authInit();

const useFireBase = () => {
    
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();
    
    // sign in w google
    const googleSignin = (redirectURL, history) => {
        setIsLoading(true);

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            }).then(() => {
                history.push(redirectURL)
            }).finally(() => setIsLoading(false));
    }

    // update username when signed in with email and pass
    const updateName = (name, history, redirectURL) => {
        setIsLoading(true);
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => {
            history.push(redirectURL);
            setIsLoading(false);
        })
    }

    // register with email and pass
    const emailRegister = (name, email, password, redirectURL, history) => {

        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            setUser(result.user);
            updateName(name , history , redirectURL);
        })
        .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
        });
    }
    
    // sign in w email and pass
    const emailSignIn = (email, password, redirectURL, history) => {
        setIsLoading(true);
        
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            setUser(result.user);
            history.push(redirectURL);
        })
        .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
        }).finally(() => {
            setIsLoading(false)
        });
    }
    
    // logout
    const logOut = () => {
        signOut(auth).then(
            () => {
                setUser({});
            }
            )
        }
        
        // set user state
        useEffect(() => {
            const userState = onAuthStateChanged(auth, (user) => {
                if (user) {
                    setUser(user);
                }
                else {
                    setUser({});
                }
                setIsLoading(false);
            });
            return userState;
        },[auth])
        
        
        return {
            user, googleSignin , emailSignIn, emailRegister,  isLoading , error, logOut
        }
}

export default useFireBase;