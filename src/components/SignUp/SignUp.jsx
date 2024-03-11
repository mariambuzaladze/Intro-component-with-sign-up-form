import "./signUp.css";
import Input from "../Input/Input";

export default function SignUp() {
  return (
    <div className="sign-up">
      <Input id="1" placeholder="First Name" />
      <Input id="2" placeholder="Second Name" />
      <Input id="3" placeholder="Email Address" />
      <Input id="4" placeholder="Password" />
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
