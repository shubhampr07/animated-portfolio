
import Image from 'next/image';
import React from 'react';
import { RxGithubLogo } from 'react-icons/rx';
import { LuExternalLink } from 'react-icons/lu';
import Link from 'next/link';

interface Props {
  src: string;
  title: string;
  description: string;
  githubLink: string;
  deployment: string;
}

const ProjectCard = ({ src, title, description, githubLink, deployment }: Props) => {
  console.log(githubLink)
  return (
    <div className='relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]'>
      <Image src={src} alt={title} width={1000} height={1000} className='w-full object-contain' />

      <div className='relative p-4'>
        <h1 className='text-2xl font-semibold text-white'>{title}</h1>
        <p className='mt-2 text-gray-300'>{description}</p>

        <div className='flex mt-2'>
          <a href={githubLink} className='flex items-center z-50 text-blue-500 hover:underline mr-4'>
          <RxGithubLogo className='mr-2' />
            GitHub
          </a>

          <a href={deployment} className='flex items-center z-50 text-blue-500 hover:underline'>
            <LuExternalLink className='mr-2' />
            Live
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
