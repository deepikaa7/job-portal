import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components_lite/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  RadioGroup,
  RadioGroupItem,
} from "../ui/radio-group";

import axios from "axios";

const Register = () => {

  // ================= Data line =================

  const [input, setInput] = useState({
    fullname: "",
    email: "",
    role: "",
    file: "",
    phoneNumber: "",
    password: "",
  });


  // ================= Input Handler =================

  const changeEventHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };


  // ================= Photo Handler =================

  const changeFileHandler = (e) => {
    setInput({
      ...input,
      file: e.target.files?.[0],
    });
  };


  // ================= Submit =================

  const submitHandler = async (e) => {
    e.preventDefault();

    console.log(input);

    // backend API call 
   try {
  const res = awake axios.post()
   } catch(error){
    console.log(error);
   }




  };


  return (
    <div className="min-h-screen bg-[#F8EFE3] text-[#3B0D18]">

      {/* ================= NAVBAR ================= */}

      <Navbar />


      {/* ================= REGISTER SECTION ================= */}

      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-6">


        {/* ================= REGISTER CARD ================= */}

        <div className="w-full max-w-[350px] rounded-2xl border border-[#E3C4C4] bg-[#FFF9F3] px-6 py-5 shadow-md">


          {/* ================= CARD HEADER ================= */}

          <div className="mb-4 text-center">

            <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-[#B86B7A]"></div>

            <h1 className="font-serif text-xl font-bold text-[#3B0D18]">
              Create Your Account
            </h1>

            <p className="mt-1 text-[11px] text-[#6B2638]">
              Join Job <span className="font-semibold">Portal</span> today ♡
            </p>

          </div>


          {/* ================= REGISTER FORM ================= */}

          <form
            className="space-y-3"
            onSubmit={submitHandler}
          >


            {/* ================= PROFILE PHOTO ================= */}

            <div className="flex flex-col items-center space-y-2">

              <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-2 border-[#D9A6A6] bg-[#F8EFE3]">
                <span className="text-xl text-[#8F4052]">
                  ☺
                </span>
              </div>

              <label
                htmlFor="profilePhoto"
                className="cursor-pointer rounded-md border border-[#D9A6A6] bg-white px-3 py-1.5 text-[11px] font-medium text-[#6B2638] transition-all hover:bg-[#FDF3F1]"
              >
                Add Profile Photo
              </label>

              <input
                id="profilePhoto"
                name="file"
                type="file"
                accept="image/*"
                onChange={changeFileHandler}
                className="hidden"
              />

            </div>


            {/* ================= FULL NAME ================= */}

            <div className="space-y-1">

              <Label
                htmlFor="name"
                className="text-xs font-medium text-[#3B0D18]"
              >
                ✩ Full Name
              </Label>

              <Input
                id="name"
                type="text"
                name="fullname"
                value={input.fullname}
                onChange={changeEventHandler}
                placeholder="Your full name"
                className="h-9 border-[#D9A6A6] bg-white text-xs text-[#3B0D18] placeholder:text-[#9A737A] focus-visible:border-[#6B2638] focus-visible:ring-[#D9A6A6]"
              />

            </div>


            {/* ================= EMAIL ================= */}

            <div className="space-y-1">

              <Label
                htmlFor="email"
                className="text-xs font-medium text-[#3B0D18]"
              >
                ✉︎ Email
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


            {/* ================= PHONE ================= */}

            <div className="space-y-1">

              <Label
                htmlFor="phone"
                className="text-xs font-medium text-[#3B0D18]"
              >
                ☏ Phone Number
              </Label>

              <Input
                id="phone"
                type="tel"
                name="phoneNumber"
                value={input.phoneNumber}
                onChange={changeEventHandler}
                placeholder="Your phone number"
                className="h-9 border-[#D9A6A6] bg-white text-xs text-[#3B0D18] placeholder:text-[#9A737A] focus-visible:border-[#6B2638] focus-visible:ring-[#D9A6A6]"
              />

            </div>


            {/* ================= ACCOUNT TYPE ================= */}

            <div className="space-y-1.5">

              <Label className="text-xs font-medium text-[#3B0D18]">
                Register as
              </Label>

              <RadioGroup
                value={input.role}
                onValueChange={(value) =>
                  setInput({
                    ...input,
                    role: value,
                  })
                }
                className="flex gap-2"
              >


                {/* ================= STUDENT ================= */}

                <label
                  htmlFor="student"
                  className="flex flex-1 cursor-pointer items-center gap-2 rounded-lg border border-[#D9A6A6] bg-white px-3 py-2 transition-all hover:border-[#8F4052] hover:bg-[#FDF3F1]"
                >

                  <RadioGroupItem
                    value="Student"
                    id="student"
                    className="border-[#6B2638] text-[#6B2638]"
                  />

                  <span className="text-xs font-medium text-[#3B0D18]">
                    Student
                  </span>

                </label>


                {/* ================= RECRUITER ================= */}

                <label
                  htmlFor="recruiter"
                  className="flex flex-1 cursor-pointer items-center gap-2 rounded-lg border border-[#D9A6A6] bg-white px-3 py-2 transition-all hover:border-[#8F4052] hover:bg-[#FDF3F1]"
                >

                  <RadioGroupItem
                    value="Recruiter"
                    id="recruiter"
                    className="border-[#6B2638] text-[#6B2638]"
                  />

                  <span className="text-xs font-medium text-[#3B0D18]">
                    Recruiter
                  </span>

                </label>

              </RadioGroup>

            </div>


            {/* ================= PASSWORD ================= */}

            <div className="space-y-1">

              <Label
                htmlFor="password"
                className="text-xs font-medium text-[#3B0D18]"
              >
                ✧ Password
              </Label>

              <Input
                id="password"
                type="password"
                name="password"
                value={input.password}
                onChange={changeEventHandler}
                placeholder="Create a password"
                className="h-9 border-[#D9A6A6] bg-white text-xs text-[#3B0D18] placeholder:text-[#9A737A] focus-visible:border-[#6B2638] focus-visible:ring-[#D9A6A6]"
              />

            </div>


            {/* ================= REGISTER BUTTON ================= */}

            <Button
              type="submit"
              className="mt-1 h-9 w-full rounded-lg bg-[#6B2638] text-xs font-medium text-[#F8EFE3] transition-all duration-200 hover:bg-[#3B0D18]"
            >
              Create Account
            </Button>

          </form>


          {/* ================= LOGIN LINK ================= */}

          <div className="mt-4 text-center text-[11px] text-[#6B2638]">

            Already have an account?{" "}

            <Link
              to="/login"
              className="font-semibold text-[#8F4052] transition-colors hover:text-[#3B0D18]"
            >
              Login
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Register;