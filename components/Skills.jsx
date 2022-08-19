import React from "react";
import Html from "../public/assets/skills/html.png";
import Css from "../public/assets/skills/css.png";
import Javascript from "../public/assets/skills/javascript.png";
import ReactImg from "../public/assets/skills/react.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import Github from "../public/assets/skills/github1.png";
import Firebase from "../public/assets/skills/firebase.png";
import NextJS from "../public/assets/skills/nextjs.png";
import AWS from "../public/assets/skills/aws.png";
import Image from "next/image";

const Skills = () => {
  return (
    <section className='w-full h-screen p-2'>
      <div className='max-w-7xl mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Skills
        </p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          {/* skill */}
          <div className='p-4 shadow-lg rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <Image src={Html} alt='HTML' />
              <h3>HTML</h3>
            </div>
          </div>
          {/* End skill */}
          {/* skill */}
          <div className='p-4 shadow-lg rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <Image src={Css} alt='HTML' />
              <h3>CSS</h3>
            </div>
          </div>
          {/* End skill */}
          {/* skill */}
          <div className='p-4 shadow-lg rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <Image src={Javascript} alt='HTML' />
              <h3>Javascript</h3>
            </div>
          </div>
          {/* End skill */}
          {/* skill */}
          <div className='p-4 shadow-lg rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <Image src={ReactImg} alt='HTML' />
              <h3>React</h3>
            </div>
          </div>
          {/* End skill */}
          {/* skill */}
          <div className='p-4 shadow-lg rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <Image src={NextJS} alt='HTML' />
              <h3>NextJS</h3>
            </div>
          </div>
          {/* End skill */}
          {/* skill */}
          <div className='p-4 shadow-lg rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <Image src={Tailwind} alt='HTML' />
              <h3>Tailwind</h3>
            </div>
          </div>
          {/* End skill */}
          {/* skill */}
          <div className='p-4 shadow-lg rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <Image src={Github} alt='HTML' />
              <h3>Github</h3>
            </div>
          </div>
          {/* End skill */}
          {/* skill */}
          <div className='p-4 shadow-lg rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <Image src={AWS} alt='HTML' />
              <h3>AWS</h3>
            </div>
          </div>
          {/* End skill */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
