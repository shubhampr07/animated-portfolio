import React from 'react'
import ProjectCard from '../sub/ProjectCard'
import Link from 'next/link'

const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20'>
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'> My Projects</h1>

        <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
            <ProjectCard 
             src='/NextWebsite.png'
             title='Modern Portfolio'
             description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
             githubLink='https://github.com/shubhampr07/Chatbot-ReactNative'
             deployment='https://www.netlify.com/'
            />
            

            <ProjectCard 
             src='/CardImage.png'
             title='Interactive Wensite Cards'
             description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
             githubLink='www.github.com'
             deployment='https://www.netlify.com/'
            />

            <ProjectCard 
             src='/SpaceWebsite.png'
             title='Space Theme'
             description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
             githubLink='www.github.com'
             deployment='https://www.netlify.com/'
            />
        </div>

        <div className='h-full w-full mt-10 flex flex-col md:flex-row gap-10 px-10'>
            <ProjectCard 
             src='/NextWebsite.png'
             title='Modern Portfolio'
             description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
             githubLink='www.github.com'
             deployment='https://www.netlify.com/'
            />

            <ProjectCard 
             src='/CardImage.png'
             title='Interactive Wensite Cards'
             description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
             githubLink='www.github.com'
             deployment='https://www.netlify.com/'
            />

            <ProjectCard 
             src='/SpaceWebsite.png'
             title='Space Theme'
             description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
             githubLink='www.github.com'
             deployment='https://www.netlify.com/'
            />
        </div>

        
    </div>
  )
}

export default Projects