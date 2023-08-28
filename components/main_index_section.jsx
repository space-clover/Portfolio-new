"use client";
import React, {useState} from 'react'
import { FaAd, FaClipboard, FaClock, FaCss3, FaFigma, FaGit, FaGitAlt, FaGithub, FaHtml5, FaLinkedin, FaSpotify, FaUser } from 'react-icons/fa';
const { motion } = require("framer-motion");
import ProyectCard from './Proyect_card';
import { SiAxios, SiFirebase, SiFramer, SiJavascript, SiLivechat, SiNextdotjs, SiReact, SiTailwindcss, SiWordpress } from "react-icons/si";
import Skill_card from './Skill_card';
import { WiDayCloudyGusts } from "react-icons/wi";
const Main_index_section = ({ reverseAnimation }) => {
    const etiquetasProyecto1 = [  "Next.js","Axios","FontAwesome","Tailwind CSS","JavaScript","OpenWeatherMap API",];
    const etiquetasProyecto2 = [    "Next.js","Firebase (Authentication and Firestore)","FontAwesome","Tailwind CSS",];
    const etiquetasProyecto3 = [    "HTML5", "FontAwesome","Tailwind CSS",];
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
        animate: { width: "125px" },
    };




    return (
        <section className=' flex flex-col justify-center w-full  text-gray-800  '>
                <header className='w-full h-auto'>
                    <motion.nav className=' font-bold w-full flex justify-around px-15/100 py-1/100 border-b border-gray-800'
                        initial={{ opacity: 0, y: -20 }}
                        animate={isReversed ? { opacity: 0, y: -20 } :{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}>
                            <p className=' cursor-pointer flex items-center' onClick={reverse} >About me <FaUser className='ml-1' /></p>
                            <p>Thoughts and Notes</p>
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
                                />Projects
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

                    <motion.div className='w-45/100 overflow-auto scrollbar-none   max-h-vh-80'
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
                        <ul className='flex flex-wrap pt-8 justify-between ' id='myskills'>
                            <li className="relative inline-block hover:text-orange-600 transition mb-1 duration-600">
                                <FaHtml5 className='text-9xl'/>
                                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition duration-700">
                                    <span className="bg-gray-800 bg-opacity-60 text-white p-2 rounded"> HTML5 </span>
                                </div>
                            </li>
                            <li className="relative inline-block hover:text-blue-600 transition  duration-600">
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
                            <li className="relative inline-block hover:text-yellow-500 transition mb-1 duration-600">
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
                            <li className="relative inline-block hover:text-orange-600 transition mb-2 duration-600">
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
                            <li className="relative inline-block hover:text-purple-900 transition duration-600">
                                <SiFramer className='text-9xl'/>
                                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition duration-700">
                                    <span className="bg-gray-800 bg-opacity-60 text-white p-2 rounded">framer-motion</span>
                                </div>
                            </li>
                            <li className="relative inline-block hover:text-orange-600 transition duration-600">
                                <SiFirebase className='text-9xl'/>
                                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition duration-700">
                                    <span className="bg-gray-800 bg-opacity-60 text-white p-2 rounded">Firebase</span>
                                </div>
                            </li>
                            <li className="relative inline-block hover:text-cyan-700 transition duration-600">
                                <SiWordpress className='text-9xl'/>
                                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition duration-700">
                                    <span className="bg-gray-800 bg-opacity-60 text-white p-2 rounded">Wordpress</span>
                                </div>
                            </li>
                            <li className="relative inline-block hover:text-black transition mb-4 duration-600">
                                <SiNextdotjs className='text-9xl'/>
                                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition duration-700">
                                    <span className="bg-gray-800 bg-opacity-60 text-white p-2 rounded">Next.js</span>
                                </div>
                            </li>
                            <Skill_card
                                titulo="Responsive Design"
                                descripcion="The ability to create designs that adapt effectively to a wide range of screen sizes 
                                and devices, ensuring a consistent visual and functional experience across devices, including mobile 
                                phones, tablets, desktop computers, and high-resolution screens. This involves using CSS media queries, rearranging elements based on available space,
                                and optimizing images and multimedia content for various resolutions."/>
                                
                                <Skill_card
                                titulo="User Experience (UX)"
                                descripcion="Having an understanding of the fundamentals of User Experience (UX) and the ability 
                                to design interfaces that are intuitive, accessible, and user-friendly. This involves comprehending 
                                user needs and expectations and designing interaction flows that are logical and efficient"/>
                                
                                <Skill_card
                                titulo="Visual Design"
                                descripcion="Having the skill to create designs that are visually appealing, with the ability to 
                                select colors, typography, and graphic elements cohesively and harmoniously. This involves understanding 
                                how to combine visual elements to convey the desired message and create a strong visual identity"/>
                        </ul>
                        <ul className='mt-vh-1'>
                            <ProyectCard
                            titulo="Wheater app"
                            descripcion="This is a React-based Weather Web App that enables users to retrieve current weather 
                            conditions and a 5-day forecast for a specific city. Users can input the city name, triggering API 
                            requests to OpenWeatherMap. The application uses state management via the useState hook to handle 
                            weather data, forecasts, highlights, and error messages. The user interface is divided 
                            into sections for search and current weather display, alongside a forecast and highlights section. "
                            etiquetas={etiquetasProyecto1} 
                            IMG = <WiDayCloudyGusts className='text-8xl'/>  />
                            <ProyectCard
                            titulo="Chat app"
                            descripcion="Introducing an real-time chat application developed using Firebase as the 
                            primary source for instant message storage and synchronization. Integrated with the cutting-edge 
                            technologies of Next.js and Tailwind CSS, this application redefines the way users communicate.
                            Leveraging Firebase Realtime Database, messages are delivered and updated instantly across devices. "
                            etiquetas={etiquetasProyecto2} 
                            IMG = <SiLivechat className='text-8xl'/>  />
                            <ProyectCard
                            titulo="Older Portfolio"
                            descripcion="Allow me to introduce my personal portfolio, a unique creation crafted using 
                            the powerful combination of Tailwind CSS, HTML, and JavaScript. Each aspect of the design has 
                            been meticulously curated to showcase my work and skills in a striking manner. Leveraging the 
                            flexibility of Tailwind CSS, 
                            I've achieved a modern and highly customized interface that seamlessly adapts to various devices.  "
                            etiquetas={etiquetasProyecto3} 
                            IMG = <img src="./Resources/wheater.png" alt="" />  />
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