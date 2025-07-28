import { useState } from "react";
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";

// Styles
import "../../assets/styles/pages/LoginPage/login.css";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // New state for loading

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    setIsLoading(true); // Set loading to true when button is clicked

    // Simulate an API call or asynchronous operation
    setTimeout(() => {
      setIsLoading(false); // Set loading to false after the operation
      // Here you would typically handle your actual admin login logic
      alert("Admin Login attempt finished!"); // Changed alert message
    }, 2000); // Simulate a 2-second loading time
  };

  return (
    <div className="login-container">
      {/* Background */}
      <div className="background">
        <div className="star star1"></div>
        <div className="star star2"></div>
        <div className="star star3"></div>
        <div className="star star4"></div>
        <div className="star star5"></div>
        <div className="particle particle1"></div>
        <div className="particle particle2"></div>
        <div className="particle particle3"></div>

        <div className="mountain-layer mountain1"></div>
        <div className="mountain-layer mountain2"></div>
        <div className="mountain-layer mountain3"></div>
      </div>

      {/* Login Card */}
      <div className="login-card">
        <div className="card-header">
          <h1>AzPMA Login</h1> {/* Updated heading */}
          <p>
            Welcome to the secure administration panel for your PDF and form management system.
            Please log in to manage documents and configurations.
          </p> {/* Updated paragraph content */}
        </div>

        <div className="card-body">

          <form className="login-form" onSubmit={handleLogin}>
            {/* Username */}
            <div className="input-group">
              <FaUser className="input-icon" />
              <input type="text" placeholder="Admin Username" className="form-input" /> {/* Updated placeholder */}
            </div>

            {/* Password */}
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Admin Password"  
                className="form-input"
              />
              <span className="input-icon password-toggle" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Remember Me</span> {/* Changed to "Remember Me" for clarity */}
              </label>
              <a href="#" className="forgot-password">Forgot Password?</a>
            </div>

            <button type="submit" className={`login-button ${isLoading ? 'loading' : ''}`} disabled={isLoading}>
              <span>LOGIN</span>
              {isLoading && <div className="spinner"></div>}
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <span>
          © 2025 PDFly by{" "}
          <a className="footerLink" href="https://pmo.az/az" target="_blank" rel="noopener noreferrer">AzPMA</a> – All rights reserved
        </span>
      </div>
    </div>
  );
}

export default LoginPage;