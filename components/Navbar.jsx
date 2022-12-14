/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose, AiFillMail } from "react-icons/ai";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  const [displauMobileNav, setDisplauMobileNav] = useState(false);
  const [navbarShadow, setnavbarShadow] = useState(false);
  const [linkColor, setLinkColor] = useState("#1f2937");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 90) setnavbarShadow(true);
      else setnavbarShadow(false);
    });
  }, []);

  const handleDisplauMobileNav = () => setDisplauMobileNav(!displauMobileNav);

  return (
    <div
      className={
        navbarShadow
          ? "fixed w-full h-20 shadow-xl bg-[#ecf0f3] z-[100]"
          : "fixed w-full h-20 bg-[#ecf0f3] z-[100]"
      }
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Image
          src='/../public/assets/navLogo.png'
          alt='logo'
          width='125'
          height='50'
        />

        {/* descktop navigation */}
        <nav>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/'>Home</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#about'>About</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#skills'>Skills</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#projects'>Projects</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/resume'>Resume</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#contact'>Contact</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div className='md:hidden ' onClick={handleDisplauMobileNav}>
            <AiOutlineMenu size={25} />
          </div>
        </nav>
        {/* End descktop navigation */}
      </div>
      {/* Mobile navigation */}

      <div
        className={
          displauMobileNav &&
          "md:hidden fixed left-0 top-0 bg-black/60 w-full h-screen"
        }
      >
        <aside
          className={
            displauMobileNav
              ? "md:hidden fixed left-0 top-0 h-screen w-[75%] sm:w-[60%] md:w-[45%] bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 bg-[#ecf0f3] p-10 ease-in duration-500"
          }
        >
          <header>
            <div className='flex w-full justify-between items-center'>
              <Image
                src='/../public/assets/navLogo.png'
                alt='logo'
                width='87'
                height='35'
              />
              <div
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
                onClick={handleDisplauMobileNav}
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4 text-sm'>
                Ex sunt deserunt ullamco sunt.
              </p>
            </div>
          </header>
          <nav className='py-4'>
            <ul className='uppercase'>
              <Link href='/'>
                <li className='text-xs py-4'>Home</li>
              </Link>
              <Link href='/'>
                <li className='text-xs py-4'>About</li>
              </Link>
              <Link href='/'>
                <li className='text-xs py-4'>Skills</li>
              </Link>
              <Link href='/'>
                <li className='text-xs py-4'>Projects</li>
              </Link>
              <Link href='/'>
                <li className='text-xs py-4'>Contact</li>
              </Link>
            </ul>
          </nav>
          <footer className='mt-10'>
            <p className='uppercase tracking-wider text-[#5651e5]'>
              Let's Connect
            </p>
            <ul className='my-4 flex justify-between items-center w-full sm:w-[80%]'>
              <li className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                <FaLinkedin />
              </li>
              <li className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                <FaFacebook />
              </li>
              <li className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                <FaTwitter />
              </li>
              <li className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                <FaGithub />
              </li>
              <li className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                <AiFillMail />
              </li>
            </ul>
          </footer>
        </aside>
      </div>

      {/* End Mobile navigation */}
    </div>
  );
};

export default Navbar;
