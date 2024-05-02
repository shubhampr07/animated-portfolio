import React from 'react'
import {RxDiscordLogo, RxInstagramLogo, RxGithubLogo, RxTwitterLogo, RxLinkedinLogo} from 'react-icons/rx'
import {FaYoutube} from 'react-icons/fa'
import {HiMail} from 'react-icons/hi'
import {BiSolidCoffeeTogo} from 'react-icons/bi'
import {BsPhoneFill} from 'react-icons/bs'
import Link from 'next/link'


const Footer = () => {
  return (
    <div className='w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]'>
        <div className='w-full flex flex-col items-center justify-center m-auto'>
            <div className='w-full h-full flex flex-row items-center justify-around flex-wrap'>

                <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                    <div className='font-bold text-[16px]'>Community</div>

                    <p className='flex flex-row mt-5 items-center my-[8px] cursor-pointer'>
                        <FaYoutube />
                        <span className='text-[15px] ml-[6px]'>Youtube</span>
                    </p>

                    <p className='flex flex-row items-center my-[8px] cursor-pointer'>
                        <RxGithubLogo />
                        <span className='text-[15px] ml-[6px]'>GitHub</span>
                    </p>

                    <p className='flex flex-row items-center my-[8px] cursor-pointer'>
                        <RxDiscordLogo />
                        <span className='text-[15px] ml-[6px]'>Discord</span>
                    </p>

                </div>

                <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                    <div className='font-bold text-[16px]'>Social</div>

                    <p className='flex flex-row mt-5 items-center my-[8px] cursor-pointer'>
                        <RxLinkedinLogo />
                        <span className='text-[15px] ml-[6px]'>Linkedin</span>
                    </p>

                    <p className='flex flex-row items-center my-[8px] cursor-pointer'>
                        <RxTwitterLogo />
                        <span className='text-[15px] ml-[6px]'>Twitter</span>
                    </p>

                    <p className='flex flex-row items-center my-[8px] cursor-pointer'>
                        <RxInstagramLogo />
                        <span className='text-[15px] ml-[6px]'>Instagram</span>
                    </p>

                </div>

                <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                    <div className='font-bold text-[16px]'>Contact</div>

                    <p className='flex flex-row mt-5 items-center my-[8px] cursor-pointer'>
                        <BsPhoneFill />
                        <span className='text-[15px] ml-[6px]'>Call</span>
                    </p>

                    <p className='flex flex-row items-center my-[8px] cursor-pointer'>
                        <HiMail />
                        <span className='text-[15px] ml-[6px]'>E-mail</span>
                    </p>

                    <p className='flex flex-row items-center my-[8px] cursor-pointer'>
                        <BiSolidCoffeeTogo />
                        <span className='text-[15px] ml-[6px]'>Buy me a Coffee </span>
                    </p>

                </div>
            </div>

            <div className='mb-[20px] mt-5 text-[15px] text-center'>
                &copy; Shubham 2023 Inc. All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer