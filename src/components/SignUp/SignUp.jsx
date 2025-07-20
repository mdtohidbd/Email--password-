import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase.init';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [errormessage, setErrormessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setErrormessage("");
    setSuccessMessage("");

    if (password.length < 6) {
      setErrormessage("❌ Password must be at least 6 characters long.");
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!passwordRegex.test(password)) {
      setErrormessage("❌ Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setSuccessMessage("✅ Registration successful!");
        e.target.reset();
      })
      .catch((error) => {
        setErrormessage(error.message);
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shadow-2xl mx-auto">
      <h3 className="text-3xl font-bold ml-4">Sign Up now!</h3>
      <div className="card-body">
        <form onSubmit={handleSignUp}>
          <label className="label">Email</label>
          <input type="email" name="email" className="input input-bordered w-full" placeholder="Email" required />

          <label className="label">Password</label>
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="input input-bordered w-full pr-10"
              placeholder="Password"
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-xl cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div><a className="link link-hover">Forgot password?</a></div>

          <button
            type="submit"
            className="btn btn-neutral mt-4 shadow-xl hover:shadow-lime-200 bg-lime-700 rounded-xl"
          >
            Sign UP
          </button>
        </form>

        {/* Success or Error message */}
        {successMessage && <p className="text-green-600 mt-2">{successMessage}</p>}
        {errormessage && <p className="text-red-500 mt-2">{errormessage}</p>}

        
        <p className="mt-4">
              Already have an account? please{" "}
              <Link to="/login" className="text-blue-600 underline">
                Login
              </Link>
            </p>

      </div>
    </div>
  );
};

export default SignUp;
