import React, { useState } from "react";
import { auth } from "../../firebase.init";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const [message, setMessage] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    // Check input in console
    console.log("Email:", email);
    console.log("Password:", password);

    // Clear previous messages
    setMessage("");

    // Firebase API Call
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log("✅ User Created:", result.user);
        setMessage("✅ Registration successful!");
        event.target.reset(); // clear form
      })
      .catch((error) => {
        console.error(" Firebase Error:", error.message);
        setMessage(` ${error.message}`);
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
      <h2 className="text-4xl my-8 text-center">Register</h2>

      <form onSubmit={handleRegister} className="space-y-6">

        {/* Email input */}
        <label className="input validator flex items-center gap-2">
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="grow"
          />
        </label>

        {/* Password input */}
        <label className="input validator flex items-center gap-2">
          <input
            type="password"
            name="password"
            placeholder="At least 6 characters"
            required
            className="grow"
          />
        </label>

        {/* Show message */}
        {message && (
          <p className={`text-sm ${message.startsWith("✅") ? "text-green-600" : "text-red-500"}`}>
            {message}
          </p>
        )}

        {/* Submit button */}
        <button
          type="submit"
          className="btn my-4 btn-accent shadow-lg hover:shadow-green-300 rounded-lg"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
