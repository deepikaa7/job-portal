import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";

import Navbar from "../components_lite/Navbar";

import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

import { USER_API_ENDPOINT } from "@/utils/data.js";

// ================= LOGIN COMPONENT =================

const Login = () => {

  // ================= FORM DATA =================

  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "Student",
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // ================= INPUT HANDLER =================

  const changeEventHandler = (e) => {
    const { name, value } = e.target;

    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ================= ROLE SELECTION =================

  const selectRole = (role) => {
    setInput((prev) => ({
      ...prev,
      role,
    }));
  };

  // ================= FORM SUBMIT =================

  const submitHandler = async (e) => {
    e.preventDefault();

    if (loading) return;

    try {
      setLoading(true);

      // ================= LOGIN API CALL =================

      const res = await axios.post(
        `${USER_API_ENDPOINT}/login`,
        {
          email: input.email.trim(),
          password: input.password,
          role: input.role,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      // ================= SUCCESS RESPONSE =================

      if (res.data.success || res.data.sucess) {
        toast.success(res.data.message || "Login successful!");

        // Go to Home page after successful login
        navigate("/");
      } else {
        toast.error(res.data.message || "Login failed.");
      }

    } catch (error) {
      console.error(
        "Login Error:",
        error.response?.data || error.message
      );

      toast.error(
        error.response?.data?.message ||
          "Login failed. Please check your email and password."
      );

    } finally {
      setLoading(false);
    }
  };

  // ================= UI =================

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

            <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-[#B86B7A]" />

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
                autoComplete="email"
                required
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
                autoComplete="current-password"
                required
                className="h-9 border-[#D9A6A6] bg-white text-xs text-[#3B0D18] placeholder:text-[#9A737A] focus-visible:border-[#6B2638] focus-visible:ring-[#D9A6A6]"
              />

            </div>

            {/* ================= SELECT ROLE ================= */}

            <div className="space-y-2">

              <Label className="text-xs font-medium text-[#3B0D18]">
                ♙ Login As
              </Label>

              <div className="flex gap-3">

                {/* STUDENT BUTTON */}

                <button
                  type="button"
                  onClick={() => selectRole("Student")}
                  aria-pressed={input.role === "Student"}
                  className={`flex-1 rounded-lg border px-3 py-2 text-xs font-medium transition-all duration-200 ${
                    input.role === "Student"
                      ? "border-[#6B2638] bg-[#6B2638] text-[#F8EFE3] shadow-sm"
                      : "border-[#D9A6A6] bg-white text-[#3B0D18] hover:border-[#6B2638]"
                  }`}
                >
                  ✧ Student
                </button>

                {/* RECRUITER BUTTON */}

                <button
                  type="button"
                  onClick={() => selectRole("Recruiter")}
                  aria-pressed={input.role === "Recruiter"}
                  className={`flex-1 rounded-lg border px-3 py-2 text-xs font-medium transition-all duration-200 ${
                    input.role === "Recruiter"
                      ? "border-[#6B2638] bg-[#6B2638] text-[#F8EFE3] shadow-sm"
                      : "border-[#D9A6A6] bg-white text-[#3B0D18] hover:border-[#6B2638]"
                  }`}
                >
                  ✧ Recruiter
                </button>

              </div>

            </div>

            {/* ================= LOGIN BUTTON ================= */}

            <Button
              type="submit"
              disabled={loading}
              className="mt-2 h-9 w-full rounded-lg bg-[#6B2638] text-xs font-medium text-[#F8EFE3] transition-all duration-200 hover:bg-[#3B0D18] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Logging in..." : "Login"}
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