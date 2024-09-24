import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './style.css'; // Assuming you have the styles.css file in the same directory
import cover from './cover.png'; // Adjust the image path if necessary

function SignUp () {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="container">
      <div className="signup-image">
        <img src={cover} alt="Sign Up" />
      </div>
      <div className="signup-form">
        <h1>Sign Up</h1>
        <p>Fill your additional details</p>
        <form action="#">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" placeholder="Write your first name" required />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" placeholder="Write your last name" required />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="tel" id="phoneNumber" placeholder="Write your phone number" required />
          </div>
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
          <button type="submit">Sign Up</button>
        </form>
        <p className="signin">
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
