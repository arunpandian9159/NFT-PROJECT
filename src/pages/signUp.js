import React from "react";

import LoginAndSignUp from "../components/auth/loginAndSignUp";

const SignUp = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="w-[90%] max-w-md mx-auto">
        <h1 className="text-5xl max-md:text-3xl font-bold mb-8 text-center gradient-text">
          Sign Up
        </h1>
        <LoginAndSignUp />
        <p className="text-center mt-8 text-slate-400">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-indigo-400 hover:text-indigo-300 font-semibold"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
