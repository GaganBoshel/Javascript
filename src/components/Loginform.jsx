import { useState } from "react";
import "./Loginform.css";

const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.4 0-8 2.2-8 5v1h16v-1c0-2.8-3.6-5-8-5Z" />
  </svg>
);

const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17 9V7a5 5 0 0 0-10 0v2H5v12h14V9h-2Zm-8-2a3 3 0 0 1 6 0v2H9V7Z" />
  </svg>
);

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, password, remember });
  };

  return (
    <div className="login-card">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>

        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <UserIcon />
        </div>

        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <LockIcon />
        </div>

        <div className="remember-forgot">
          <label>
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            Remember me
          </label>
          <a href="#">Forgot Password?</a>
        </div>

        <button className="submit-button" type="submit">
          <span>Login</span>
          <span className="star-1" aria-hidden="true" />
          <span className="star-2" aria-hidden="true" />
          <span className="star-3" aria-hidden="true" />
          <span className="star-4" aria-hidden="true" />
          <span className="star-5" aria-hidden="true" />
          <span className="star-6" aria-hidden="true" />
        </button>

        <p className="register-link">
          Don&apos;t have an account? <a href="#">Sign Up</a>
        </p>
      </form>
    </div>
  );
}