import React, { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components_lite/Navbar";

import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Login = () => {

  // ================= Data line =================

  const [input, setInput] = useState({
    email: "",
    password: "",
  });


  // ================= Input Handler =================

  const changeEventHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };


  // ================= Form Submit =================

  const submitHandler = async (e) => {
    e.preventDefault();

    console.log(input);

    // yahan backend API call aayega
  };


  return (
    <div className="min-h-screen bg-[#F8EFE3] text-[#3B0D18]">


      {/* ================= NAVBAR ================= */}

      <Navbar />


      {/* ================= LOGIN SECTION ================= */}

      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-6">


        {/* ================= LOGIN CARD ================= */}

        <div className="w-full max-w-[350px] rounded-2xl border border-[#E3C4C4] bg-[#FFF9F3] px-6 py-6 shadow-md">


          {/* ================= CARD HEADER ================= */}

          <div className="mb-6 text-center">

            <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-[#B86B7A]"></div>

            <h1 className="font-serif text-xl font-bold text-[#3B0D18]">
              Welcome Back
            </h1>

            <p className="mt-1 text-[11px] text-[#6B2638]">
              Login to your{" "}
              <span className="font-semibold">
                Job Portal
              </span>{" "}
              account ☆
            </p>

          </div>


          {/* ================= LOGIN FORM ================= */}

          <form
            className="space-y-4"
            onSubmit={submitHandler}
          >


            {/* ================= EMAIL ================= */}

            <div className="space-y-1">

              <Label
                htmlFor="email"
                className="text-xs font-medium text-[#3B0D18]"
              >
                ✉ Email
              </Label>

              <Input
                id="email"
                type="email"
                name="email"
                value={input.email}
                onChange={changeEventHandler}
                placeholder="Your email address"
                className="h-9 border-[#D9A6A6] bg-white text-xs text-[#3B0D18] placeholder:text-[#9A737A] focus-visible:border-[#6B2638] focus-visible:ring-[#D9A6A6]"
              />

            </div>


            {/* ================= PASSWORD ================= */}

            <div className="space-y-1">

              <div className="flex items-center justify-between">

                <Label
                  htmlFor="password"
                  className="text-xs font-medium text-[#3B0D18]"
                >
                  ♢ Password
                </Label>

                <Link
                  to="/forgot-password"
                  className="text-[10px] font-medium text-[#8F4052] transition-colors hover:text-[#3B0D18]"
                >
                  Forgot Password?
                </Link>

              </div>


              <Input
                id="password"
                type="password"
                name="password"
                value={input.password}
                onChange={changeEventHandler}
                placeholder="Enter your password"
                className="h-9 border-[#D9A6A6] bg-white text-xs text-[#3B0D18] placeholder:text-[#9A737A] focus-visible:border-[#6B2638] focus-visible:ring-[#D9A6A6]"
              />

            </div>


            {/* ================= LOGIN BUTTON ================= */}

            <Button
              type="submit"
              className="mt-2 h-9 w-full rounded-lg bg-[#6B2638] text-xs font-medium text-[#F8EFE3] transition-all duration-200 hover:bg-[#3B0D18]"
            >
              Login
            </Button>


          </form>


          {/* ================= REGISTER LINK ================= */}

          <div className="mt-5 text-center text-[11px] text-[#6B2638]">

            Don't have an account?{" "}

            <Link
              to="/register"
              className="font-semibold text-[#8F4052] transition-colors hover:text-[#3B0D18]"
            >
              Create Account
            </Link>

          </div>


        </div>

      </div>

    </div>
  );
};

export default Login;