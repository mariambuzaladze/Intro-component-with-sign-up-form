import "./signUp.css";
import Input from "../Input/Input";
import { useState } from "react";
import ErrorIcon from "/images/icon-error.svg";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const [secondName, setSecondName] = useState("");
  const [secondNameError, setSecondNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailNameError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (event) => {
    if (firstName.length === 0) {
      setFirstNameError(true);
    } else {
      setFirstNameError(false);
    }

    if (secondName.length === 0) {
      setSecondNameError(true);
    } else {
      setSecondNameError(false);
    }

    if (password.length === 0) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    if (!email.includes("@") || email.length === 0) {
      setEmailNameError(true);
    } else {
      setEmailNameError(false);
    }
  };

  return (
    <div className="sign-up">
      <div className="input">
        <Input
          id="1"
          placeholder="First Name"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value.trim())}
        />

        {firstNameError ? (
          <>
            <img src={ErrorIcon} alt="Error" className="error-icon" />
            <p className="error-active">First Name cannot be empty</p>
          </>
        ) : null}
      </div>

      <div className="input">
        <Input
          id="2"
          placeholder="Second Name"
          value={secondName}
          onChange={(event) => setSecondName(event.target.value.trim())}
        />
        {secondNameError ? (
          <>
            <img src={ErrorIcon} alt="Error" className="error-icon" />
            <p className="error-active">Second Name cannot be empty</p>
          </>
        ) : null}
      </div>

      <div className="input">
        <Input
          id="3"
          placeholder="Email Address"
          value={email}
          onChange={(event) => setEmail(event.target.value.trim())}
        />
        {emailError ? (
          <>
            <img src={ErrorIcon} alt="Error" className="error-icon" />
            <p className="error-active">Looks like this is not an email</p>
          </>
        ) : null}
      </div>

      <div className="input">
        <Input
          id="4"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value.trim())}
        />
        {passwordError ? (
          <>
            <img src={ErrorIcon} alt="Error" className="error-icon" />
            <p className="error-active">Password cannot be empty</p>
          </>
        ) : null}
      </div>

      <div className="button">
        <button onClick={handleSubmit}>CLAIM YOUR FREE TRIAL</button>
        <p className="button-text">
          By clicking the button, you are agreeing to our
          <span className="terms"> Terms and Services</span>
        </p>
      </div>
    </div>
  );
}
