import { useState } from 'react';
import './style.css'; // Assuming you have the styles.css file in the same directory
import cover from './cover.png'; // Adjust the image path if necessary

function SignIn () {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="container">
      <div className="signup-image">
        <img src={cover} alt="Sign In" />
      </div>
      <div className="signup-form">
        <h1>Sign In</h1>
        <p>Sign in with the details you entered during registration</p>
        <form action="#">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Write your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              placeholder="Write your password"
              required
            />
            <span className="eye-icon" onClick={togglePasswordVisibility}></span>
          </div>
          <button type="submit">Sign In</button>
        </form>
        <p className="signin">Forgot your password? <a href="#">Reset now</a></p>
        <p className="signup">Don't have an account? <a href="./signup.jsx">Sign Up</a></p>
      </div>
    </div>
  );
};

export default SignIn;
