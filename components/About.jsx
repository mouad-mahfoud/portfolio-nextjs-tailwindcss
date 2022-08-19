import Image from "next/image";
import Link from "next/link";
import React from "react";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <section className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-7xl m-auto lg:grid grid-cols-3 gap-8'>
        <div className='col-span-2 px-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            / / I am not your average developer
          </p>
          <p className='py-2 text-gray-600'>
            I have spent the last 12 years in the fire service working as a
            professional firefighter/paramedic. I have always had a knack for
            technology and working with computers. In 2019 I started working
            with HTML and CSS to make some minor edits on a small business
            website that I was operating. What I thought was just a few small
            edits turned into a love for programming.
          </p>
          <p className='py-2 text-gray-600'>
            Fascinated with how intricate programming can be I was quickly drawn
            to learn more. I started learning javascript and was even more
            enthused with making websites interactive. I then started
            freelancing for e-commerce companies on the Shopify platform. I am
            now spending my time building projects with React JS, Firebase, and
            learning new technologies.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto flex justify-center'>
          <Image
            src={AboutImg}
            className='rounded-xl shadow-md shadow-gray-400 hover:scale-95 ease-out duration-300'
            alt='/'
          />
        </div>
      </div>
    </section>
  );
};

export default About;
