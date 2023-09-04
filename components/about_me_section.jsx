"use client";
import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaPaperclip, FaGithubAlt, FaLinkedin } from 'react-icons/fa';
const { motion } = require("framer-motion");

const AboutMeSection = ({ onAnimationFinish }) => {
    const [isReversed, setIsReversed] = useState(false);
    const reverse = () => {
        setIsReversed(!isReversed);
        setTimeout(() => {
            onAnimationFinish();
        }, 1500);
    };

    return (
        <section className='text-md text-primary min-h-screen bg-neutral w-85/100 px-2/100 py-4/100 lg:p-12/100'>
            <motion.p onClick={reverse} className='hover:text-gray-800 transition duration-500 cursor-pointer'
                initial={{ opacity: 0 }}
                animate={isReversed ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 2 }}>
                <FaArrowAltCircleRight
                    className='text-4xl absolute top-15/100 right-20/100  ' />
            </motion.p>

            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={isReversed ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className='text-4xl font-semibold py-4 2xl:text-5xl'
            >
                Hello web traveler,
            </motion.h2>
            <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={isReversed ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className='text-9xl font-bold'
            >
                im Jona
            </motion.h1>
            <div className='lg:flex mt-10/100   '>
                <motion.p
                    className='lg:w-45/100 2xl:w-65/100 w-full text-justify text-sm 2xl:text-lg'
                    initial={{ opacity: 0, y: -20 }}
                    animate={isReversed ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    Hi! I&apos;m Jonathan, a web developer passionate about crafting digital experiences. 
                    With expertise in React, Firebase, and Tailwind CSS, I enjoy translating ideas into functional code.
                    My aim is to blend aesthetics with functionality to design modern and appealing web applications.
                </motion.p>
                <div className='lg:ml-12/100 mt-5/100 lg:mt-0 flex justify-around'>
                    <motion.a href='https://pdfhost.io/v/zkl~y8NHi_Neutral_Minimalist_Professional_Resume' className='flex items-center px-2 hover:text-gray-800 transition duration-500 '
                        initial={{ opacity: 0, x: 40 }}
                        animate={isReversed ? { opacity: 0, x: 40 } : { opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: -0.5 }}
                    >  <FaPaperclip className='ml-4 text-3xl' /> </motion.a>
                    <motion.a href='https://github.com/space-clover' className='flex items-center px-2 hover:text-gray-800 transition duration-500 '
                        initial={{ opacity: 0, x: 40 }}
                        animate={isReversed ? { opacity: 0, x: 40 } : { opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: -0.5 }}
                    >  <FaGithubAlt className=' text-4xl' /> </motion.a>
                    <motion.a href='https://www.linkedin.com/in/jefry-jonathan-mejia-176476240/' className='flex items-center px-2 hover:text-blue-800 transition duration-500 '
                        initial={{ opacity: 0, x: 40 }}
                        animate={isReversed ? { opacity: 0, x: 40 } : { opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: -0.5 }}
                    >  <FaLinkedin className=' text-4xl' /> </motion.a>
                </div>
            </div>
        </section>
    )
}

export default AboutMeSection;
