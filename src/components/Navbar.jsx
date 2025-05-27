'use client';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [loggedUser, setLoggedUser] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage.getItem('user')) {
      setLoggedUser(JSON.parse(window.localStorage.getItem('user')));
    } else {
      setLoggedUser(null);
    }
  }, []);

  return (
    <div className="bg-white flex gap-15 items-center justify-between px-4 py-2 relative">
      <div className="flex items-center gap-4">
        <img src="/image/Group 65.png" alt="Dutiful Logo" className="ml-4 mt-2" />
        <img src="/image/Search.png" alt="Search-icon" className="h-[40px] mt-4 ml-4 lg:block hidden" />
        <ul className="lg:flex gap-20 mt-8  ml-15 text-base text-[#686868] font-bold hidden">
          <li><Link to="/business">Business Directory</Link></li>
          <li><Link to="/feature">Features</Link></li>
          <li><Link to="/feature">Pricing</Link></li>
          <li><Link to="/home">Blog</Link></li>
        </ul>
      </div>

      {/* Auth buttons for large screens */}
      {loggedUser ? (
        <div className="md:flex hidden gap-3 pt-3">
          <p>Hi, {loggedUser.name}</p>
          <button
            className="btn-secondary"
            onClick={() => {
              setLoggedUser(null);
              return window.localStorage.clear();
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <ul className="lg:flex gap-15 hidden">
          <li className="mt-8 text-[#1E1E4B] font-bold"><Link to="/login">Login</Link></li>
          <li>
            <Link
              to="/signup"
              className="flex justify-center items-center border-[#603F8B] border-2 mt-4 w-[174px] h-[59px] text-[#603F8B] cursor-pointer hover:text-white font-bold text-center px-2 rounded-md hover:bg-[#603F8B]"
            >
              Sign up
            </Link>
          </li>
        </ul>
      )}

      {/* Hamburger / Close icon for mobile */}
      <div className="lg:hidden z-50">
        <button
          className="focus:outline-none"
          onClick={() => setIsNavOpen(!isNavOpen)}
          aria-label="Toggle Menu"
        >
          {isNavOpen ? (
            <svg
              className="w-6 h-6 text-[#603F8B]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-[#603F8B]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isNavOpen && (
        <div className="fixed inset-0 z-40 bg-black/70">
          <div className="ml-auto h-full w-4/5 bg-[#532F82] py-24 px-6 animate-slide-in-left rounded-t-4xl">
            {loggedUser && (
              <p className="text-lg font-medium text-[#686868] mb-4">
                Hi, {loggedUser.name}
              </p>
            )}
            <Link to="/business" className="block py-2 text-[#c8b0ce] font-semibold" onClick={() => setIsNavOpen(false)}>
              Business Directory
            </Link>
            <Link to="/feature" className="block py-2 mt-6 text-[#c8b0ce] font-semibold" onClick={() => setIsNavOpen(false)}>
              Features
            </Link>
            <Link to="/feature" className="block py-2 mt-6  text-[#c8b0ce] font-semibold" onClick={() => setIsNavOpen(false)}>
              Pricing
            </Link>
            <Link to="/home" className="block py-2 mt-6 text-[#c8b0ce] font-semibold" onClick={() => setIsNavOpen(false)}>
              Blog
            </Link>

            {loggedUser ? (
              <div className="flex flex-col gap-5 mt-6 ">
                <button
                  onClick={() => {
                    setLoggedUser(null);
                    return localStorage.clear();
                  }}
                  className="btn-secondary  "
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="mt-6 flex flex-col gap-y-4">
                <Link to="/login" className=" border-gray-50 border-2 hover:bg-[#c8b0ce] rounded-md  w-55 h-15 pt-3 text-center text-[#c8b0ce] font-semibold" onClick={() => setIsNavOpen(false)}>
                  Login
                </Link>
                <Link to="/signup" className=" border-gray-50 border-2 rounded-md  hover:bg-[#c8b0ce] w-55  h-15 pt-3 text-center text-[#c8b0ce] font-semibold" onClick={() => setIsNavOpen(false)}>
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
