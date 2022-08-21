/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Main = () => {
  return (
    <section id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex flex-col justify-center'>
        <p className='uppercase text-sm tracking-widest text-gray-600'>
          Let's build somting together
        </p>
        <h1 className='py-2 text-gray-800'>
          Hi, Im <span className='text-[#5651e5]'>Mouad</span>
        </h1>
        <h1 className='py-4 text-gray-700'>A web developer</h1>
        <p className='max-w-3/4 mx-auto px-10 text-gray-600'>
          I’m focused on building responsive front-end web applications while
          learning back-end technologies.
        </p>
        <ul className='flex justify-between items-center w-full max-w-[320px] pt-5 mx-auto'>
          <li className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            <FaLinkedinIn />
          </li>
          <li className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            <FaFacebook />
          </li>
          <li className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            <FaTwitter />
          </li>
          <li className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            <FaGithub />
          </li>
          <li className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            <AiOutlineMail />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Main;
