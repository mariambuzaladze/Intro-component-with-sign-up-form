import "./signUp.css";
import Input from "../Input/Input";

export default function SignUp() {
  return (
    <div className="sign-up">
      <Input />
      <Input />
      <Input />
      <Input />
      <div className="button">
        <button>CLAIM YOUR FREE TRIAL</button>
        <p className="button-text">
          By clicking the button, you are agreeing to our Terms and Services
        </p>
      </div>
    </div>
  );
}
