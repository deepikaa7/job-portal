import React from "react";
import { Link } from "react-router-dom";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";

const Navbar = () => {
  const user = false;

  return (
    <div className="bg-[#3B0D18] text-[#F8EFE3]">

      {/* ================= MAIN NAVBAR ================= */}
      <div className="flex h-16 items-center justify-between px-6">

        {/* ================= LEFT PART : LOGO ================= */}
        <div className="flex items-center gap-3">

          {/* Logo */}
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F8EFE3] text-[#3B0D18] shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect
                x="3"
                y="7"
                width="18"
                height="13"
                rx="2"
              />

              <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />

              <path d="M3 12h18" />
            </svg>
          </div>

          {/* Job Portal Name */}
          <h1 className="text-xl font-bold tracking-tight">
            Job <span className="text-[#D9A6A6]">Portal</span>
          </h1>

        </div>


        {/* ================= RIGHT PART : NAVIGATION ================= */}
        <div>

          <ul className="flex items-center gap-8 font-medium">

            {/* Home */}
            <li>
              <Link
                to="/"
                className="transition-colors duration-200 hover:text-[#D9A6A6]"
              >
                Home
              </Link>
            </li>


            {/* Browse */}
            <li>
              <Link
                to="/browse"
                className="transition-colors duration-200 hover:text-[#D9A6A6]"
              >
                Browse
              </Link>
            </li>


            {/* Jobs */}
            <li>
              <Link
                to="/jobs"
                className="transition-colors duration-200 hover:text-[#D9A6A6]"
              >
                Jobs
              </Link>
            </li>


            {/* ================= LOGIN / REGISTER OR AVATAR ================= */}
            {!user ? (

              /* ================= LOGIN + REGISTER  click garepaxi page khulne================= */
              <li className="flex items-center gap-3">

                {/* Login */}
                <Link to="/login">
                  <Button
                    variant="outline"
                    className="border-[#F0C4C4] bg-transparent text-[#F8EFE3] transition-all duration-200 hover:bg-[#F0C4C4] hover:text-[#3B0D18]"
                  >
                    Login
                  </Button>
                </Link>


                {/* Register */}
                <Link to="/register">
                  <Button
                    className="bg-[#F0C4C4] text-[#3B0D18] transition-all duration-200 hover:bg-[#F8EFE3]"
                  >
                    Register
                  </Button>
                </Link>

              </li>

            ) : (

              /* ================= PROFILE AVATAR ================= */
              <li>

                <Popover>

                  <PopoverTrigger asChild>
                    <Avatar className="cursor-pointer border-2 border-[#F8EFE3]">

                      <AvatarImage
                        src="/flower.jpg"
                        alt="Profile"
                      />

                      <AvatarFallback className="bg-[#F0C4C4] text-[#3B0D18]">
                        DP
                      </AvatarFallback>

                    </Avatar>
                  </PopoverTrigger>


                  {/* ================= PROFILE POPUP ================= */}
                  <PopoverContent className="w-80 border-[#B86B7A] bg-[#6B2638]">

                    <div className="space-y-3">

                      {/* Profile Image */}
                      <Avatar className="border-2 border-[#F8EFE3]">

                        <AvatarImage
                          src="/flower.jpg"
                          alt="Profile"
                        />

                        <AvatarFallback className="bg-[#F0C4C4] text-[#3B0D18]">
                          DP
                        </AvatarFallback>

                      </Avatar>


                      {/* Name */}
                      <h1 className="font-serif text-xl font-semibold tracking-wide text-[#FFF7EF]">
                        deepika
                      </h1>


                      {/* Welcome Text */}
                      <p className="font-serif text-sm italic tracking-wide text-[#E8B8BE]">
                        Welcome to your profile
                      </p>


                      {/* ================= VIEW PROFILE + LOGOUT ================= */}
                      <div className="flex gap-3 pt-2">

                        {/* View Profile */}
                        <button
                          className="flex-1 rounded-md bg-[#F0C4C4] px-4 py-2 text-sm font-medium text-[#3B0D18] transition-all duration-200 hover:bg-[#F8EFE3]"
                        >
                          View Profile
                        </button>


                        {/* Logout */}
                        <button
                          className="flex-1 rounded-md bg-[#F0C4C4] px-4 py-2 text-sm font-medium text-[#3B0D18] transition-all duration-200 hover:bg-[#F8EFE3]"
                        >
                          Logout
                        </button>

                      </div>

                    </div>

                  </PopoverContent>

                </Popover>

              </li>

            )}

          </ul>

        </div>

      </div>

    </div>
  );
};

export default Navbar;