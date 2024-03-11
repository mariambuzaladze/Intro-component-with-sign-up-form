import "./intro.css";
import SignUp from "../SignUp/SignUp";

export default function Intro() {
  return (
    <div className="page">
      <div className="text">
        <p className="title">Learn to code by watching others</p>
        <p className="description">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>

      <div className="try">
        <p className="try-text">
          Try it free 7 days <span>then $20/mo. thereafter</span>
        </p>
      </div>

      <SignUp />
    </div>
  );
}
