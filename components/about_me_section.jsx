"use client";
import React from 'react'
import { FaArrowAltCircleRight, FaBeer, FaGithubAlt, FaLinkedin, FaLinkedinIn, FaPaperclip } from 'react-icons/fa';
const { motion } = require("framer-motion");

const About_me_section = () => {
    return (
        <section className='text-md text-primary p-12/100'>
            <motion.p className='hover:text-gray-800 transition duration-500 cursor-pointer'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}>
            <FaArrowAltCircleRight 
                className='text-4xl absolute top-15/100 right-20/100 '/> </motion.p>

            <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className='text-4xl font-semibold py-4'
                >
                    Hello web traveler,
                </motion.h2>
                <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className='text-9xl font-bold'
                >
                    i'm Jona
                </motion.h1>
            <div className='flex mt-10/100   '>
                <motion.p 
                    className=' w-45/100 text-justify text-sm ' 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    Hi! I&apos;m Jonathan, a web developer passionate about crafting digital 
                    experiences. With expertise in React, Firebase, and Tailwind CSS, 
                    I enjoy translating ideas into functional code. My aim is to blend aesthetics with
                    functionality to design modern and appealing web applications. 

                </motion.p>
                <div className=' ml-12/100 flex flex-col'>
                    <motion.a href='' className='flex items-center hover:text-gray-800 transition duration-500 '
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 , delay: -0.5 }}
                    >  you can see my resume here! <FaPaperclip className='ml-4 text-xl' /> </motion.a>
                    <div className='flex justify-around mt-4'>
                        <motion.a href='' className='flex items-center hover:text-gray-800 transition duration-500 '
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 , delay: -0.5 }}
                        >  <FaGithubAlt className=' text-4xl' /> </motion.a>
                        <motion.a href='' className='flex items-center hover:text-blue-800 transition duration-500 '
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: -0.5  }}
                        >  <FaLinkedin className=' text-4xl' /> </motion.a>
                    </div>
                </div>

                        

            </div>
        </section>
    )
}

export default About_me_section