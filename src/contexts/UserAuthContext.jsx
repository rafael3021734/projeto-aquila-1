import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithRedirect,
  signInWithPopup,
} from "firebase/auth";
import { auth, onAuthStateChangedListener } from "../utils/firebase/firebase.utils";

const userAuthContext = createContext();

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

const provider = new GoogleAuthProvider();

//export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export function UserAuthContextProvider({ children }) {
  const [currentuser, setCurrentUser] = useState(null);
  const [values, setvalues] = useState("5");
  
    const value = { currentuser, setCurrentUser };
    console.log(value)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
          console.log("Auth", currentuser);
          setCurrentUser(currentuser);
        });

       return () => {
      unsubscribe();
    };
    }, [])

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }
  function googleSignIn() {
    //const googleAuthProvider = new GoogleAuthProvider();
    //return signInWithRedirect(auth, googleAuthProvider);
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  return (
    <userAuthContext.Provider
      value={{ values, setvalues, value, logIn, signUp, logOut, googleSignIn }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
