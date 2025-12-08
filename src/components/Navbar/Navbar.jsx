import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Brain from "../../Images/Brain.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClasses = ({ isActive }) =>
    `block px-3 py-2 text-sm font-medium transition-colors ${
      isActive ? "text-sky-400" : "text-slate-300"
    } hover:text-slate-50`;

  return (
    <nav className="fixed inset-x-0 top-0 z-30 border-b border-slate-800/80 bg-black backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 lg:px-0">
        {/* Logo / brand */}
        <Link to="/" className="hand flex items-center gap-2">
          <div className=" h-12 w-12 ">
            <img src={Brain} alt="Brain" className=" object-cover"/>
          </div>
          <div data-cursor="view" className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-slate-50">
              Rethink
            </span>
            <span className="text-[11px] text-slate-400">
              Digital Solutions
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          <NavLink to="/" className={`${navLinkClasses} hand`}>
            Home
          </NavLink>
          <NavLink to="/services" className={`${navLinkClasses} hand`}>
            Services
          </NavLink>
          <NavLink to="/portfolio" className={`${navLinkClasses} hand`}>
            Portfolio
          </NavLink>
          <NavLink to="/about" className={`${navLinkClasses} hand`}>
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hand rounded-full border border-slate-700 bg-slate-900/80 px-4 py-1.5 text-sm font-medium text-slate-100 shadow-sm shadow-slate-900/60 transition hover:border-sky-500 hover:bg-slate-900 ${
                isActive ? "border-sky-500 text-sky-300" : ""
              }`
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-full border border-slate-700/70 bg-slate-900/80 p-2 text-slate-200 overflow-hidden hover:border-slate-500 hover:bg-slate-900 md:hidden"
        >
          <span className="sr-only">Toggle main menu</span>
          {isOpen ? (
            // Close icon
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
            >
              <path
                strokeLinecap="round"
                strokeWidth="1.6"
                d="M6 6l12 12M18 6L6 18"
              />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
            >
              <path
                strokeLinecap="round"
                strokeWidth="1.6"
                d="M4 7h16M4 12h16M4 17h12"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden border-t border-slate-800/70 bg-slate-950/95 backdrop-blur-sm transition-[max-height,opacity] duration-200 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="mx-auto flex max-w-6xl flex-col px-4 py-3 space-y-1">
          <NavLink to="/" className={navLinkClasses} onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={navLinkClasses}
            onClick={() => setIsOpen(false)}
          >
            Services
          </NavLink>
          <NavLink
            to="/portfolio"
            className={navLinkClasses}
            onClick={() => setIsOpen(false)}
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/about"
            className={navLinkClasses}
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="mt-2 inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm font-medium text-slate-100 shadow-sm shadow-slate-900/60 transition hover:border-sky-500 hover:bg-slate-900"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
