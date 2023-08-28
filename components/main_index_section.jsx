"use client";
import React, {useState} from 'react'
import { FaAd, FaClipboard, FaClock, FaCss3, FaFigma, FaGit, FaGithub, FaHtml5, FaLinkedin, FaSpotify, FaUser } from 'react-icons/fa';
const { motion } = require("framer-motion");
import ProyectCard from './Proyect_card';
import { IconName, SiAxios, SiJavascript, SiReact, SiTailwindcss } from "react-icons/si";
import Skill_card from './skill_card';
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
        initial: { width: "54px" }, // Ancho inicial
        animate: { width: "100px" },
    };

    const skills = [
        { icon: <Fa500Px />, texto: "Habilidad 1" },
        { icon: <Fa500Px />, texto: "Habilidad 2" },
    ];

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
                        <motion.div className="ml-13/100 mt-10/100  "
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
                        <motion.div className='flex justify-around  px-35/100 mt-25/100'
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
                        </p>
                        <ul className='flex flex-wrap pt-8 justify-around '>
                            {skills.map((skill, index) => (
                                <SkillCard key={index} icon={skill.icon} texto={skill.texto} />
                            ))}
                            <FaCss3 className='text-9xl m-1'/>
                            <SiTailwindcss className='text-9xl m-1'/>
                            <SiJavascript className='text-9xl m-1'/>
                            <FaFigma className='text-9xl m-1'/>
                            <FaGit className='text-9xl m-1'/>
                            <SiAxios className='text-9xl m-1'/>
                            <SiReact className='text-9xl m-1'/>
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