import React, { useState, useContext } from "react";
import "./App.css";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import logo from "./logo.png";
import { userContext } from "./GlobalContext";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  console.log("props:", props);
  const { user, setUser, val1, setVal1 } = useContext(userContext);
  const navigate = useNavigate();
  const firebaseConfig = {
    apiKey: "AIzaSyDu7QsPJoLRbvr5pQs8JlB-aJWKjAZEvBI",
    authDomain: "web3auth-55234.firebaseapp.com",
    projectId: "web3auth-55234",
    storageBucket: "web3auth-55234.appspot.com",
    messagingSenderId: "272188218552",
    appId: "1:272188218552:web:1e36916662035422e9e84d",
    measurementId: "G-SD8CRKT5HC",
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const [provider, setProvider] = useState(null);

  const googleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    setProvider(googleProvider);
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const userResult = result.user;
        setUser(userResult);
        console.log("UserRegistered");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  const twitterLogin = () => {
    setVal1(val1 + 1);
    console.log(val1);
    const twitterProvider = new TwitterAuthProvider();
    setProvider(() => {
      return twitterProvider;
    });
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = TwitterAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const secret = credential.secret;
        const userResult = result.user;
        setUser(userResult);
        if (user) {
          console.log("TwitterSignIn");
          toAccount();
        }
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const credential = TwitterAuthProvider.credentialFromError(error);
      });
  };
  const toAccount = () => {
    navigate("/account");
  };

  const signMeOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed Out successfull!");
      })
      .catch((error) => {
        console.log("error->", error);
      });
  };
  return (
    <div className="main-container">
      <div className="container">
        <img
          src={logo}
          style={{
            width: 140,
            height: 140,
            marginTop: 20,
          }}
        />
        <h1 style={{ color: "#ffffff", fontFamily: "sans-serif" }}>Portal</h1>
        <div
          style={{
            color: "#ffffff",
            fontFamily: "sans-serif",
            fontSize: 25,
            textAlign: "center",
          }}
        >
          Space for your web3 <br />
          Teams, Enterprises and DAOs
        </div>
        <form
          // onSubmit={(e) => {
          //   navigation("./Acocunt");
          //   // e.preventDefault();
          // }}
          style={{ padding: 30 }}
        >
          <div
            style={{
              backgroundColor: "#246bfd",
              height: 50,
              borderRadius: 10,
              width: 340,
              color: "#ffffff",
              fontFamily: "sans-serif",
              textAlign: "center",
              lineHeight: "50px",
              fontSize: 20,
            }}
            onClick={googleSignIn}
          >
            Sign In with Google
          </div>
          <br />
          <br />
          <div
            style={{
              backgroundColor: "#a1ff2a",
              height: 50,
              borderRadius: 10,
              width: 340,
              fontFamily: "sans-serif",
              textAlign: "center",
              lineHeight: "50px",
              fontSize: 20,
            }}
            onClick={twitterLogin}
          >
            Sign In with Twitter
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
