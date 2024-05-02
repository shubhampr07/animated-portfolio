import Image from 'next/image';
import React from 'react';
import { Socials } from '@/constants';

const Navbar = () => {
  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10'>
      <div className='w-full h-full flex flex-row items-center justify-between m-auto'>
        <a href="#about-me" className='h-auto w-auto flex flex-row items-center'>
          <Image
            src='/NavLogo.png'
            alt='logo'
            width={70}
            height={70}
            className='cursor-pointer hover:animate-slowspin'
          />

          <span className='font-bold ml-2 md:ml-10 hidden md:block text-gray-300'>
            Portfolio
          </span>
        </a>

        <div className='w-[80%] md:w-auto h-full flex flex-row items-center justify-between md:mr-10'>
          <div className='flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-2 md:mr-10 px-2 md:px-4 py-1 md:py-2 rounded-full text-gray-200 md:gap-[70px] lg:gap-[70px]'>
            <a href="https://nextjs.org/learn-pages-router/basics/navigate-between-pages/link-component" className='cursor-pointer'>About me</a>
            <a href="skills" className='cursor-pointer'>Skills</a>
            <a href="projects" className='cursor-pointer'>Projects</a>
          </div>
        </div>

        <div className='flex flex-row gap-2 md:gap-5'>
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
