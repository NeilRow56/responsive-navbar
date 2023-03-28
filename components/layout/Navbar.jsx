"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="x-10 fixed top-0 left-0 right-0 w-full bg-sky-500  text-white">
        <div className="mx-auto justify-between px-4 md:flex md:items-center md:px-8 lg:max-w-7xl">
          <div>
            <div className="flex items-center justify-between py-3 md:border-x-black md:py-5">
              {/* Logo */}
              <Link href="/">
                <h2 className="pl-2 text-2xl font-bold text-white">LOGO</h2>
              </Link>
              {/* Hamburger Button for Mobile */}
              <div className="md:hidden">
                <button
                  className="rounded-md p-2 text-gray-700 outline-none focus:border focus:border-gray-400"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <GrClose className="h-8 w-8 text-white" />
                  ) : (
                    <GiHamburgerMenu className="h-8 w-8  text-white focus:border-none active:border-none" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${
                navbar ? "block p-12 md:p-0" : "hidden"
              }`}
            >
              <ul className="h-screen items-center justify-center md:flex md:h-auto ">
                <li className="border-b-2 border-purple-900 py-2 pb-6 text-center text-xl text-white hover:bg-purple-900  md:border-b-0  md:px-6  md:hover:bg-transparent md:hover:text-purple-600">
                  <a href="#about" onClick={() => setNavbar(!navbar)}>
                    About
                  </a>
                </li>
                <li className="border-b-2 border-purple-900 py-2 px-6 pb-6 text-center  text-xl text-white  hover:bg-purple-600  md:border-b-0  md:hover:bg-transparent md:hover:text-purple-600">
                  <a href="#blog" onClick={() => setNavbar(!navbar)}>
                    Blogs
                  </a>
                </li>
                <li className="border-b-2 border-purple-900 py-2 px-6 pb-6 text-center  text-xl text-white  hover:bg-purple-600  md:border-b-0  md:hover:bg-transparent md:hover:text-purple-600">
                  <a href="#contact" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </a>
                </li>
                <li className="border-b-2 border-purple-900 py-2 px-6 pb-6 text-center  text-xl text-white  hover:bg-purple-600  md:border-b-0  md:hover:bg-transparent md:hover:text-purple-600">
                  <a href="#projects" onClick={() => setNavbar(!navbar)}>
                    Projects
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
