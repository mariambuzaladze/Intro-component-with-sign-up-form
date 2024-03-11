import "./signUp.css";
import Input from "../Input/Input";
import Error from "/images/icon-error.svg";
import { useState } from "react";

export default function SignUp() {
  const [firstName, setFirstName] = useState({
    value: "",
    className: "error-text",
  });
  const [secondName, setSecondName] = useState({
    value: "",
    className: "error-text",
  });
  const [email, setEmail] = useState({ value: "", className: "error-text" });
  const [password, setPassword] = useState({
    value: "",
    className: "error-text",
  });

  const displayError = (event, setState) => {
    let value = event.target.value.trim();
    if (value.length === 0) {
      setState({ value: Error, className: "error-active" });
    } else {
      setState({ value: "", className: "error-text" });
    }
  };

  const displayErrorEmail = (event, setState) => {
    let value = event.target.value.trim();
    if (value.length === 0 || !value.split("").includes("@")) {
      setState({ value: Error, className: "error-active" });
    } else {
      setState({ value: "", className: "error-text" });
    }
  };

  return (
    <div className="sign-up">
      <Input
        id="1"
        placeholder="First Name"
        text="First Name cannot be empty"
        onChange={(event) => displayError(event, setFirstName)}
        className={firstName.className}
      />
      <Input
        id="2"
        placeholder="Second Name"
        text="Second Name cannot be empty"
        onChange={(event) => displayError(event, setSecondName)}
        className={secondName.className}
      />
      <Input
        id="3"
        placeholder="Email Address"
        text="Looks like this is not an email"
        onChange={(event) => displayErrorEmail(event, setEmail)}
        className={email.className}
      />
      <Input
        id="4"
        placeholder="Password"
        text="Password cannot be empty"
        onChange={(event) => displayError(event, setPassword)}
        className={password.className}
      />

      <div className="button">
        <button>CLAIM YOUR FREE TRIAL</button>
        <p className="button-text">
          By clicking the button, you are agreeing to our
          <span className="terms"> Terms and Services</span>
        </p>
      </div>
    </div>
  );
}
