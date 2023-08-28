"use client";
import React, {useState} from 'react'
import { FaAd, FaClipboard, FaClock, FaCss3, FaFigma, FaGit, FaGitAlt, FaGithub, FaHtml5, FaLinkedin, FaSpotify, FaUser } from 'react-icons/fa';
const { motion } = require("framer-motion");
import ProyectCard from './Proyect_card';
import { IconName, SiAxios, SiFramer, SiJavascript, SiReact, SiTailwindcss } from "react-icons/si";
const Main_index_section = ({ reverseAnimation }) => {
    const etiquetasProyecto1 = ["Etiqueta 1", "Etiqueta 2"];
    const [isAnimating, setIsAnimating] = useState(false);
    const [isAnimating2, setIsAnimating2] = useState(false);
    const [isAnimating3, setIsAnimating3] = useState(false);
    const [isReversed, setIsReversed] = useState(false);
    const reverse= () => {
        setIsReversed(!isReversed);
        setTimeout(() => {
            reverseAnimation(); 
        }, 1500);  
    };

    const varianfunctionforbar = () => {
        setIsAnimating(prevState => !prevState);
    };
    const varianfunctionforbar2 = () => {
        setIsAnimating2(prevState => !prevState);
    
        
    };
    const varianfunctionforbar3 = () => {
        setIsAnimating3(prevState => !prevState);
    };
    const animationVariants = {
        initial: { width: "54px" },
        animate: { width: "100px" },
    };




    return (
        <section className=' flex flex-col justify-center w-full  text-gray-800  '>
                <header className='w-full h-auto'>
                    <motion.nav className='w-full flex justify-around px-15/100 py-1/100 border-b border-gray-800'
                        initial={{ opacity: 0, y: -20 }}
                        animate={isReversed ? { opacity: 0, y: -20 } :{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}>
                            <p className=' cursor-pointer flex items-center' onClick={reverse} >About me <FaUser className='ml-1' /></p>
                            <p>Thoughts</p>
                            <p>Contact</p>
                    </motion.nav>
                </header>
                <div className='ml-2/100 flex w-full mt-3/100 p-1/100'>
                    <div className='w-45/100 flex flex-col justify-cente '>
                        <motion.h1 className='text-7xl font-bold ml-10/100' 
                            initial={{ opacity: 0, x: -20 }}
                            animate={isReversed ? { opacity: 0, x: 0 } :{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >Skills and proyects
                        </motion.h1>
                        <p></p>
                        <motion.div className="ml-13/100 mt-vh-5  "
                            initial={{ opacity: 0, y: -20 }}
                            animate={isReversed ? { opacity: 0, y: -20 } :{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay:0.5 }}>
                            <div className="items-center font-semibold w-max-auto flex p-1 cursor-pointer" 
                            onMouseEnter={varianfunctionforbar} onMouseLeave={varianfunctionforbar}>
                                <motion.div className="border-2 border-blue-700 w-8 mr-2 rounded-3xl" 
                                initial="initial"
                                animate={isAnimating ? "animate" : "initial"}
                                variants={animationVariants}
                                transition={{ duration: 0.5 }}
                                /> About
                            </div>
                            <div className="flex items-center font-semibold mt-3/100 p-1 cursor-pointer"
                            onMouseEnter={varianfunctionforbar2} onMouseLeave={varianfunctionforbar2}>
                            <motion.div className="border-2 border-blue-700 w-8 mr-2 rounded-3xl" 
                                initial="initial"
                                animate={isAnimating2 ? "animate" : "initial"}
                                variants={animationVariants}
                                transition={{ duration: 0.5 }}
                                /> Skills 
                            </div>
                            <div className="flex items-center font-semibold mt-3/100 p-1 cursor-pointer"
                            onMouseEnter={varianfunctionforbar3} onMouseLeave={varianfunctionforbar3}>
                            <motion.div className="border-2 border-blue-700 w-8 mr-2 rounded-3xl" 
                                initial="initial"
                                animate={isAnimating3 ? "animate" : "initial"}
                                variants={animationVariants}
                                transition={{ duration: 0.5 }}
                                /> My Projects
                            </div>
                        </motion.div>
                        <motion.div className='flex justify-around  px-35/100 mt-vh-35'
                            initial={{ opacity: 0, y: 20 }}
                            animate={ isReversed ? { opacity: 0, y: 20 } :{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}>
                            <FaLinkedin className=' cursor-pointer hover:text-blue-800 text-3xl' />
                            <FaGithub className=' cursor-pointer hover:text-black text-3xl' />
                            <FaClipboard className=' cursor-pointer hover:text-gray-700 text-3xl' />
                        </motion.div>
                    </div>

                    <motion.div className='w-45/100 p-1/100 overflow-auto scrollbar-none   max-h-vh-80'
                        initial={{ opacity: 0, x: 20 }}
                        animate={isReversed ? { opacity: 0, x: 20 } :{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay:0.7 }}>
                        <p className=' text-justify'>
                        Hey there!, a web developer fueled by a passion for crafting visually appealing
                        and dynamic digital experiences. Proficient in technologies like Tailwind CSS, Next.js, Axios and Framer Motion, I specialize in
                        creating seamless user interfaces that captivate and engage. With a love for clean code and an eye for design, 
                        <br/> <br/>
                        I'm dedicated 
                        to turning innovative ideas into reality. Let's collaborate and bring your web projects to life with a touch of creativity and a 
                        dash of technology! Feel free to modify this text to match your personal style and preferences.
                        Some tecnologies with I work are:
                        </p>
                        <ul className='flex flex-wrap pt-8 justify-around ' id='myskills'>
                            <li className="relative inline-block hover:text-orange-600 transition duration-600">
                                <FaHtml5 className='text-9xl'/>
                                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition duration-700">
                                    <span className="bg-gray-800 bg-opacity-60 text-white p-2 rounded"> HTML5 </span>
                                </div>
                            </li>
                            <li className="relative inline-block hover:text-blue-600 transition duration-600">
                                <FaCss3 className='text-9xl'/>
                                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition duration-700">
                                    <span className="bg-gray-800 bg-opacity-60 text-white p-2 rounded"> CSS3 </span>
                                </div>
                            </li>
                            <li className="relative inline-block hover:text-cyan-600 transition duration-600">
                                <SiTailwindcss className='text-9xl'/>
                                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition duration-700">
                                    <span className="bg-gray-800 bg-opacity-60 text-white p-2 rounded"> Tailwind CSS </span>
                                </div>
                            </li>
                            <li className="relative inline-block hover:text-yellow-500 transition duration-600">
                                <SiJavascript className='text-9xl'/>
                                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition duration-700">
                                    <span className="bg-gray-800 bg-opacity-60 text-white p-2 rounded"> Javascript </span>
                                </div>
                            </li>
                            <li className="relative inline-block hover:text-blue-900 transition duration-600">
                                <SiReact className='text-9xl'/>
                                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition duration-700">
                                    <span className="bg-gray-800 bg-opacity-60 text-white p-2 rounded"> React/Next </span>
                                </div>
                            </li>
                            <li className="relative inline-block hover:text-purple-600 transition duration-600">
                                <FaFigma className='text-9xl'/>
                                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition duration-700">
                                    <span className="bg-gray-800 bg-opacity-60 text-white p-2 rounded"> Figma </span>
                                </div>
                            </li>
                            <li className="relative inline-block hover:text-orange-600 transition duration-600">
                                <FaGitAlt className='text-9xl'/>
                                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition duration-700">
                                    <span className="bg-gray-800 bg-opacity-60 text-white p-2 rounded"> GIT </span>
                                </div>
                            </li>
                            <li className="relative inline-block hover:text-purple-500 transition duration-600">
                                <SiAxios className='text-9xl'/>
                                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition duration-700">
                                    <span className="bg-gray-800 bg-opacity-60 text-white p-2 rounded"> AXIOS </span>
                                </div>
                            </li>
                            <li className="relative inline-block hover:text-purple-500 transition duration-600">
                                <SiFramer className='text-9xl'/>
                                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition duration-700">
                                    <span className="bg-gray-800 bg-opacity-60 text-white p-2 rounded">framer-motion</span>
                                </div>
                            </li>
                        </ul>
                        <ul className='mt-10/100'>
                            <ProyectCard
                            titulo="Spotify Profile"
                            descripcion="Web app for visualizin personalized Spotify data. 
                            View your tops artis, top tracks, recently plyaed tracks, and detailed audifo infomration 
                            about each track, created and save new playlist of reccomende tracks base 
                            on your existin playlist and more"
                            etiquetas={etiquetasProyecto1} 
                            IMG = <FaSpotify className=' text-green-950 cursor-pointer hover:text-gray-700 text-7xl' /> />
                            <ProyectCard
                            titulo="Spotify Profile"
                            descripcion="Web app for visualizin personalized Spotify data. 
                            View your tops artis, top tracks, recently plyaed tracks, and detailed audifo infomration 
                            about each track, created and save new playlist of reccomende tracks base 
                            on your existin playlist and more"
                            etiquetas={etiquetasProyecto1} 
                            IMG = <FaSpotify className=' text-green-950 cursor-pointer hover:text-gray-700 text-7xl' /> />
                        </ul>
                    </motion.div>
                </div>
        </section>
    )
}

export default Main_index_section