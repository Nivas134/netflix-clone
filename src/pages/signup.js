import React, { useState, useContext } from "react";
import { FooterContainer } from "../containers/Footer";
import { HeaderContainer } from "../containers/header";
import { Form } from "../components";
import { FirebaseContext } from "../context/firebase";
import * as ROUTES from "../constants/routes";
import { useHistory } from "react-router";

function Signup() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [firstname, setFirstname] = useState("");
  const [emailAdress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = password === "" || emailAdress === "" || firstname === "";
  const handleSignup = (e) => {
    e.preventDefault();

    //
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAdress, password)
      .then((res) => {
        res.user
          .updateProfile({
            displayName: firstname,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            history.push(ROUTES.BROWSE);
          });
      })
      .catch((error) => {
        setEmailAddress("");
        setPassword("");
        setError(error.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignup} method="POST">
            <Form.Input
              placeholder="First Name"
              value={firstname}
              onChange={({ target }) => setFirstname(target.value)}
            />
            <Form.Input
              placeholder="Email Address"
              value={emailAdress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              placeholder="Password"
              type="password"
              autocomplete="off"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign In
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            Already Have an Account?{" "}
            <Form.Link to="/signin">SignIn Here</Form.Link>{" "}
          </Form.Text>
          <Form.TextSmall>
            This page is protecte by Google reCAPTCHA to ensure you're not a
            bot. Learn More.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}

export default Signup;
