import { useEffect, useState } from 'react';
import authInit from 'Firebase/firebase-init';
import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import axios from 'axios';

import apiUrl from 'constants';

authInit();

const useFireBase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // save user
  const saveUser = (email, displayName, method = 'post') => {
    const user = { email, displayName };

    if (method === 'put') {
      axios.put(`${apiUrl}/users`, user).then();
    } else {
      axios.post(`${apiUrl}/users`, user).then();
    }
  };

  // sign in w google
  const googleSignin = (redirectURL, history) => {
    setIsLoading(true);

    signInWithPopup(auth, googleProvider)
      .then(result => {
        setUser(result.user);
        saveUser(result.user.email, result.user.displayName, 'put');
      })
      .then(() => {
        history.push(redirectURL);
      })
      .finally(() => setIsLoading(false));
  };

  // update username when signed in with email and pass
  const updateName = (name, email, history, redirectURL) => {
    setIsLoading(true);
    updateProfile(auth.currentUser, { displayName: name }).then(result => {
      saveUser(email, name);
      history.push(redirectURL);
      setIsLoading(false);
    });
  };

  // register with email and pass
  const emailRegister = (name, email, password, redirectURL, history) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const { user } = result;
        setUser(user);
        updateName(name, email, history, redirectURL);
      })
      .catch(error => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  // sign in w email and pass
  const emailSignIn = (email, password, redirectURL, history) => {
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        setUser(result.user);
        history.push(redirectURL);
      })
      .catch(error => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // logout
  const logOut = history => {
    signOut(auth).then(() => {
      setUser({});
      history.push('/home');
    });
  };

  // set user state
  useEffect(() => {
    const userState = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return userState;
  }, [auth]);

  // check admin
  useEffect(() => {
    fetch(`${apiUrl}/users/${user.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin));
  }, [user.email]);

  return {
    user,
    admin,
    googleSignin,
    emailSignIn,
    emailRegister,
    isLoading,
    error,
    logOut,
  };
};

export default useFireBase;
