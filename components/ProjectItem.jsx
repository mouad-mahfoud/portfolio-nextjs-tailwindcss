import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({ title, backgroundImg, projectUrl, tech }) => {
  return (
    <div className='relative flex justify-center items-center h-auto w-full shadow-lg shadow-gray-400 my-4 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
      <Image
        className='rounded-xl group-hover:opacity-10'
        src={backgroundImg}
        alt={title}
      />
      <div className='hidden group-hover:block absolute text-white text-center'>
        <h3 className=' text-2xl tracking-wider'>{title}</h3>
        <p className='pb-4 pt-2'>{tech}</p>
        <Link href={projectUrl}>
          <p className='py-2 rounded-lg bg-white text-gray-700 font-bold cursor-pointer'>
            More info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
