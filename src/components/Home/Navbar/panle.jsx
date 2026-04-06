import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import loginim from "../../../assets/images/login.png";
import ragiterim from "../../../assets/images/register-illustration.png";
import forgotim from "../../../assets/images/forgot-password-illustration.png";
import { NavLink } from "react-router-dom";
import React from "react";

/* ================= LOGIN ================= */
export function LoginForm({ setPanel }) {
  return (
    <div className="w-full  flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg p-6 sm:p-8 rounded-xl">

    <div className="flex justify-center mb-6">
  <img
    src="/images/logo.png"
    alt="New Steps"
    className="h-20 w-auto object-contain"
  />
</div>

        <h2 className="text-2xl font-bold text-center text-black mb-2">
          Welcome Back
        </h2>

        <p className="text-center text-gray-500 text-sm mb-6">
          Sign in to continue
        </p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-full py-3 text-sm hover:bg-gray-100 transition">
            <FcGoogle size={18} /> Google
          </button>

          <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-full py-3 text-sm hover:bg-gray-100 transition">
            <FaFacebookF size={14} /> Facebook
          </button>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-[1px] bg-gray-300"></div>
          <p className="text-xs text-gray-400">OR</p>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full border border-gray-300 rounded-full px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-full px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div className="flex justify-end mt-2 mb-6">
          <button
            onClick={() => setPanel("forgot")}
            className="text-xs text-black hover:underline"
          >
            Forgot Password?
          </button>
        </div>

        <button className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-900 transition">
          Sign In
        </button>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <button
            onClick={() => setPanel("register")}
            className="text-black font-medium hover:underline"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}

/* ================= REGISTER ================= */
export const RegisterForm = ({ setPanel }) => (
  <div className="w-full p-6 max-w-md mx-auto bg-white rounded-xl shadow-lg">

    <div className="flex justify-center mb-6">
  <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center">
    <span className="text-white text-2xl">✨</span>
  </div>
</div>
    <div className="flex items-center gap-4 mb-6">
      <div className="flex-1 h-px bg-gray-300"></div>
      <p className="text-sm text-gray-400">Or sign up with</p>
      <div className="flex-1 h-px bg-gray-300"></div>
    </div>

    <div className="grid grid-cols-2 gap-4 mb-6">
      <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-full py-3 text-sm hover:bg-gray-100">
        <FcGoogle size={18} /> Google
      </button>

      <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-full py-3 text-sm hover:bg-gray-100">
        <FaFacebookF size={14} /> Facebook
      </button>
    </div>

    <div className="flex gap-2 mb-2">
      <input
        type="text"
        placeholder="First Name"
        className="w-full border border-gray-300 text-sm rounded-full px-4 py-2 focus:ring-2 focus:ring-black"
      />
      <input
        type="text"
        placeholder="Last Name"
        className="w-full border border-gray-300 text-sm rounded-full px-4 py-2 focus:ring-2 focus:ring-black"
      />
    </div>

    <input
      type="email"
      placeholder="Email"
      className="w-full border border-gray-300 text-sm rounded-full px-4 py-2 mb-2 focus:ring-2 focus:ring-black"
    />

    <input
      type="password"
      placeholder="Password"
      className="w-full border border-gray-300 text-sm rounded-full px-4 py-2 mb-2 focus:ring-2 focus:ring-black"
    />

    <input
      type="password"
      placeholder="Confirm Password"
      className="w-full border border-gray-300 text-sm rounded-full px-4 py-2 mb-4 focus:ring-2 focus:ring-black"
    />

    <button className="w-full bg-black text-white py-2 rounded-full font-medium hover:bg-gray-900 transition">
      Create Account
    </button>

    <p className="text-sm text-gray-600 mt-6">
      Already have an account?
      <button
        onClick={() => setPanel("login")}
        className="text-black ml-2 hover:underline"
      >
        Login
      </button>
    </p>
  </div>
);

/* ================= FORGOT ================= */
export const ForgotPasswordForm = ({ setPanel }) => (
  <div className="w-full p-6 max-w-md mx-auto bg-white rounded-xl shadow-lg">
<div className="flex justify-center mb-6">
  <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center">
    <span className="text-white text-2xl">🔒</span>
  </div>
</div>
    <input
      type="email"
      placeholder="Email"
      className="w-full border border-gray-300 text-sm rounded-full px-4 py-2 mb-4 focus:ring-2 focus:ring-black"
    />

    <button className="w-full bg-black text-white py-2 rounded-full font-medium hover:bg-gray-900 transition">
      Reset Password
    </button>

    <p className="text-sm text-gray-600 mt-6">
      <button
        onClick={() => setPanel("login")}
        className="text-black hover:underline"
      >
        Back to Login
      </button>
    </p>
  </div>
);

/* ================= MENU ================= */
export const Menu = ({ setPanel }) => {
  return (
    <div className="w-full max-w-md mx-auto  rounded-xl  py-4">

      <div className="flex flex-col gap-3 text-sm font-semibold text-gray-700">

        {["/", "/collection", "/about", "/contact"].map((path, i) => {
          const names = ["Home", "Collection", "About", "Contact"];

          return (
            <NavLink
              key={path}
              to={path}
              onClick={() => setPanel(null)}
              className={({ isActive }) =>
                `flex items-center justify-between px-4 py-3 rounded-lg transition ${
                  isActive
                    ? "bg-black text-white"
                    : "hover:bg-gray-100"
                }`
              }
            >
              {names[i]}
              <span>→</span>
            </NavLink>
          );
        })}

      </div>
    </div>
  );
};