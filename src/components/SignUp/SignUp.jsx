import "./signUp.css";
import Input from "../Input/Input";

export default function SignUp() {
  return (
    <div className="sign-up">
      <Input placeholder="First Name" />
      <Input placeholder="Second Name" />
      <Input placeholder="Email Address" />
      <Input placeholder="Password" />
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
