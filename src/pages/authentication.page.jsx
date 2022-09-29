import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../contexts/UserAuthContext";
import { auth, signInWithGoogleRedirect } from "../utils/firebase/firebase.utils";
import { getRedirectResult } from 'firebase/auth';
import { AutoCenter, Space } from "antd-mobile";
import values from "../contexts/UserAuthContext"

const Authenticate = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const{values} = useUserAuth;
  const navigate = useNavigate();

  useEffect(() => {
    const authenticate = async () => {
        const response = await getRedirectResult(auth);
        console.log(auth)
        console.log(response)
        if(response) {
            await axios.post('https://projeto-aquila.herokuapp.com/api/users/', {
                'id': response.user.uid,
                'name': response.user.displayName,
                'email': response.user.email
            });
        }
    }

    authenticate();
}, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/map");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    console.log(e)
    e.preventDefault();
    try {
      await googleSignIn()
      navigate("/map");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>    
      <div className="p-4 box">
      <AutoCenter>
        <h2 className="mb-3">Áquila{values}</h2>
        {error && <Alert variant="danger">{error}</Alert>}
      </AutoCenter>  
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Log In
            </Button>
          </div>
        </Form>
        <hr />
        <div>
          <GoogleButton
            className="g-btn"
            type="dark"
            onClick={signInWithGoogleRedirect}
          ></GoogleButton>
        </div>
      </div>
      <div className="p-4 box mt-3 text-center">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
    </>
  );
};

export default Authenticate;
