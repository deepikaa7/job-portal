
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const headlines = [
  "Get Your Dream Job.",
  "Discover New Opportunities.",
  "Build Your Future.",
  "Find Your Next Chapter.",
];

const Header = () => {
  const [search, setSearch] = useState("");
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  const navigate = useNavigate();

  // Change the message smoothly
  useEffect(() => {
    let timeout;

    const interval = setInterval(() => {
      setVisible(false);

      timeout = setTimeout(() => {
        setHeadlineIndex(
          (previous) => (previous + 1) % headlines.length
        );
        setVisible(true);
      }, 450);
    }, 3500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  // Handle job search
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/browse?keyword=${encodeURIComponent(search)}`);
  };

  return (
    <section className="overflow-hidden bg-[#F8EFE3] px-4 py-14 sm:py-16">
      <div className="mx-auto max-w-5xl text-center">

        {/* Intro */}
        <p className="hero-intro mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8E5264] sm:text-xs">
          Your Next Chapter Starts Here
        </p>

        {/* Main heading */}
        <h1 className="main-heading text-3xl font-extrabold leading-tight tracking-tight text-[#713747] sm:text-4xl lg:text-5xl">
          Search. Apply.
        </h1>

        {/* Handwriting-style animated message */}
        <div className="handwriting-slot mt-3 flex min-h-[3.5rem] items-center justify-center px-1 sm:min-h-[4rem]">
          <h2
            key={headlineIndex}
            className={`handwriting-text ${
              visible ? "writing-visible" : "writing-hidden"
            }`}
          >
            {headlines[headlineIndex]}
          </h2>
        </div>

        {/* Description */}
        <p className="hero-description mx-auto mt-4 max-w-xl text-xs leading-6 text-[#79535B] sm:text-sm">
          Discover opportunities that match your ambition.
          <span className="block">
            Your next opportunity starts here.
          </span>
        </p>

        {/* Search form */}
        <form
          onSubmit={handleSearch}
          className="hero-search mx-auto mt-7 flex max-w-xl flex-col gap-2 rounded-xl border border-[#E3C4C4] bg-[#FFF9F3] p-2 sm:flex-row sm:items-center"
        >
          <div className="flex flex-1 items-center gap-3 px-2">
            <svg
              className="h-5 w-5 shrink-0 text-[#8E5264]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m16 16 4 4" />
            </svg>

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Job title, skills or company"
              aria-label="Search jobs"
              className="h-10 w-full bg-transparent text-xs text-[#713747] outline-none placeholder:text-[#A68B8E] sm:text-sm"
            />
          </div>

          <button
            type="submit"
            className="rounded-lg bg-[#713747] px-5 py-3 text-xs font-semibold text-[#FFF9F3] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8E5264] hover:shadow-md active:scale-[0.98] sm:text-sm"
          >
            Find Jobs <span className="ml-2">→</span>
          </button>
        </form>

        {/* Bottom caption */}
        <p className="hero-caption mt-4 text-[10px] tracking-wide text-[#916D73] sm:text-xs">
          Find your place. Make your move.
        </p>
      </div>

      {/* Animations and styling */}
      <style>{`
        /* Main heading arrives and settles */
        .main-heading {
          opacity: 0;
          animation: headingArrive 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards;
        }

        @keyframes headingArrive {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.97);
          }

          75% {
            opacity: 1;
            transform: translateY(-2px) scale(1);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* Elegant handwriting-inspired text */
        .handwriting-text {
          margin: 0;
          color: #8E5264;
          font-family: "Segoe Script", "Brush Script MT", cursive;
          font-size: clamp(1.45rem, 3.4vw, 2.15rem);
          font-weight: 500;
          line-height: 1.4;
          letter-spacing: 0.01em;
          transform-origin: center;
          transition:
            opacity 0.45s ease,
            transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
            filter 0.45s ease;
        }

        .writing-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
          filter: blur(0);
          animation: handwritingReveal 1.1s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .writing-hidden {
          opacity: 0;
          transform: translateY(7px) scale(0.98);
          filter: blur(3px);
        }

        @keyframes handwritingReveal {
          0% {
            clip-path: inset(0 100% 0 0);
            opacity: 0.5;
          }

          100% {
            clip-path: inset(0 0 0 0);
            opacity: 1;
          }
        }

        /* Supporting content */
        .hero-intro,
        .hero-description,
        .hero-search,
        .hero-caption {
          animation: fadeUp 0.8s ease-out both;
        }

        .hero-intro {
          animation-delay: 0.05s;
        }

        .hero-description {
          animation-delay: 0.3s;
        }

        .hero-search {
          animation-delay: 0.4s;
          box-shadow: 0 8px 26px rgba(113, 55, 71, 0.06);
          transition: box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .hero-search:focus-within {
          border-color: #B98A98;
          box-shadow: 0 10px 30px rgba(113, 55, 71, 0.11);
        }

        .hero-caption {
          animation-delay: 0.5s;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .main-heading,
          .hero-intro,
          .hero-description,
          .hero-search,
          .hero-caption {
            animation: none;
            opacity: 1;
            transform: none;
          }

          .handwriting-text {
            animation: none;
            transition: none;
            clip-path: none;
            opacity: 1;
            filter: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Header;
