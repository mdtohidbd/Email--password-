import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.init"; // তুমি যেখানে auth রেখেছো সেই path
import { Link } from "react-router-dom";

const Login = () => {
  const [Success, setSuccess] = useState(false);
  const [loginError, setLoginError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    setSuccess(false);
    setLoginError("");

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log("Logged in user:", result.user);
        setSuccess(true);
      })
      .catch((error) => {
        console.error("Login error:", error.message);
        setLoginError(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input input-bordered"
                placeholder="Email"
                required
              />

              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input input-bordered"
                placeholder="Password"
                required
              />

              <div>
                <a href="#" className="link link-hover">
                  Forgot password?
                </a>
              </div>

              <button type="submit" className="btn btn-neutral mt-4">
                Login
              </button>
            </form>

            {Success && (
              <p className="text-green-500 mt-2">Login successful!</p>
            )}
            {loginError && (
              <p className="text-red-500 mt-2">{loginError}</p>
            )}

            <p className="mt-4">
              New to this website?{" "}
              <Link to="/signUp" className="text-blue-600 underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
