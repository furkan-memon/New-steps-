import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import loginim from '../../../assets/images/login-illustration.png'
import ragiterim from '../../../assets/images/register-illustration.png'
import forgotim from '../../../assets/images/forgot-password-illustration.png'
import SidePanel from "./Sidepanle";

import React, { useState } from "react";

export  function LoginForm({setPanel}) {
    
  return (
    <>
    <div className="w-full p-6 max-w-md mx-auto">
      <div className="flex justify-center mb-6">
        <img
          src={loginim}
          alt="login"
          className=""
        />
      </div>
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 h-[1px] bg-gray-200"></div>
        <p className="text-sm text-gray-400">Or Sign up with</p>
        <div className="flex-1 h-[1px] bg-gray-200"></div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <button className="flex items-center text-[12px] justify-center gap-2 border border-gray-300 rounded-full py-3 hover:bg-gray-50 transition">
          <FcGoogle size={18} /> Google
        </button>
        <button className="flex items-center text-[12px] justify-center gap-2 border border-gray-300 rounded-full py-3 hover:bg-gray-50 transition">
          <FaFacebookF className="text-blue-600" size={14} /> Facebook
        </button>
      </div>
      <div className="mb-4">
        <input
          type="email"
          placeholder="Email *"
          className="w-full border border-gray-200 text-[12px] rounded-full px-5 py-3 outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>
      <div className="mb-2">
        <input
          type="password"
          placeholder="Password *"
          className="w-full border border-gray-200 text-[12px] rounded-full px-5 py-3 outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>
    
            <div className="flex justify-end mb-6">
        <button  onClick={() => setPanel("forgot")} className="text-sm text-teal-700 hover:underline">
          Forgot Password?
        </button>
      </div>
      <button className="w-full bg-[#0f766e] text-white py-3 rounded-full font-medium shadow hover:bg-[#0b5e58] transition">
        Sign In
      </button>
      <p className="text-start ml-3 text-sm text-gray-500 mt-6">
    
        Don't have an account ?
        <button onClick={()=> setPanel('register')} className="text-teal-700 font-medium hover:underline">
          
          Sign Up
        </button>
      </p>
    </div>
      
    </>
  );
}
export const RegisterForm = ({setPanel}) => (
  <>
    <div className="w-full p-6 max-w-md mx-auto">
      <div className="flex justify-center mb-6">
        <img
          src={ragiterim}
          alt="ragiter"
          className=""
        />
      </div>
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 h-[1px] bg-gray-200"></div>
        <p className="text-sm text-gray-400">Or log in with</p>
        <div className="flex-1 h-[1px] bg-gray-200"></div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <button className="flex items-center text-[12px] justify-center gap-2 border border-gray-300 rounded-full py-3 hover:bg-gray-50 transition">
          <FcGoogle size={18} /> Google
        </button>
        <button className="flex items-center text-[12px] justify-center gap-2 border border-gray-300 rounded-full py-3 hover:bg-gray-50 transition">
          <FaFacebookF className="text-blue-600" size={14} /> Facebook
        </button>
      </div>
      <div className="flex">

        <div className="mb-2">
        <input
          type="text"
          placeholder=" Fisr Name *"
          className="w-full border border-gray-200 text-[12px] rounded-full px-5 py-3 outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>
        <div className="mb-2">
        <input
          type="text"
          placeholder=" Last Name *"
          className="w-full border border-gray-200  text-[12px] rounded-full px-5 py-3 outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>
      </div>
      <div className="mb-4">
        <input
          type="email"
          placeholder="Email *"
          className="w-full border border-gray-200 text-[12px] rounded-full px-5 py-3 outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>
      <div className="mb-2">
        <input
          type="password"
          placeholder="Password *"
          className="w-full border border-gray-200  text-[12px] rounded-full px-5 py-3 outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>
        <div className="mb-2">
        <input
          type="text"
          placeholder=" conform Password *"
          className="w-full border border-gray-200 text-[12px] rounded-full px-5 py-3 outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>
            
      <button className="w-full bg-[#088178] text-[13px] text-white py-2 rounded-full font-medium shadow hover:bg-[#0b5e58] transition">
       Create Account
     </button>
      <p className="text-start ml-3 text-sm font-semibold text-gray-600 mt-6">
    
        Already Have An Account ?
        <button onClick={()=> setPanel('login')} className="text-teal-700 ml-2 font-medium hover:underline">
          
          Sign Up
        </button>
      </p>
    </div>
  </>
);
export const ForgotPasswordForm = ({setPanel}) => (
  <>
    <div className="w-full p-6 max-w-md mx-auto">
      <div className="flex justify-center mb-6">
        <img
          src={forgotim}
          alt="Forgot"
          className=""
        />
      </div>
      
      
      <div className="mb-4">
        <input
          type="email"
          placeholder="Email *"
          className="w-full border border-gray-200 text-[12px] rounded-full px-5 py-3 outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>
      
        
            
      <button className="w-full bg-[#088178] text-[13px] text-white py-2 rounded-full font-medium shadow hover:bg-[#0b5e58] transition">
       Reset Password
     </button>
      <p className="text-start ml-3 text-sm font-semibold text-gray-600 mt-6">
        <button onClick={()=> setPanel('login')} className="text-teal-700 ml-2 font-medium hover:underline">
          
         Beck To Login 
        </button>
      </p>
    </div>
  </>
);
export const Menu = ({setPanel}) => (
  <>
    <div className="w-full p-6 max-w-md mx-auto">
      <div className="flex justify-center mb-6">
        <img
          src={forgotim}
          alt="Forgot"
          className=""
        />
      </div>
      
      
      <div className="mb-4">
        <input
          type="email"
          placeholder="Email *"
          className="w-full border border-gray-200 text-[12px] rounded-full px-5 py-3 outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>
      
        
            
      <button className="w-full bg-[#088178] text-[13px] text-white py-2 rounded-full font-medium shadow hover:bg-[#0b5e58] transition">
       Reset Password
     </button>
      <p className="text-start ml-3 text-sm font-semibold text-gray-600 mt-6">
        <button onClick={()=> setPanel('login')} className="text-teal-700 ml-2 font-medium hover:underline">
          
         Beck To Login 
        </button>
      </p>
    </div>
  </>
);
