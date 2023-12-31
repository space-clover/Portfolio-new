"use client";
import React, {useState, useEffect, useRef} from 'react'
import { FaAd, FaArrowAltCircleLeft, FaArrowAltCircleUp, FaClipboard, FaClock, FaCss3, FaDesktop, FaFigma, FaGit, FaGitAlt, FaGithub, FaHome, FaHtml5, FaLinkedin, FaRegStickyNote, FaShoePrints, FaSpotify, FaUser } from 'react-icons/fa';
const { motion, SwitchLayoutGroupContext } = require("framer-motion");
import ProyectCard from './Proyect_card';
import { SiAxios, SiBootstrap, SiFirebase, SiFramer, SiFreedesktopdotorg, SiIonic, SiJavascript, SiLivechat, SiNextdotjs, SiNodedotjs, SiPcgamingwiki, SiReact, SiTailwindcss, SiTypescript, SiWordpress } from "react-icons/si";
import { GiSettingsKnobs, IconName } from "react-icons/gi";
import Skill_card from './Skill_card';
import { WiDayCloudyGusts } from "react-icons/wi";
import { AiFillLayout } from "react-icons/ai";

const Main_index_section = ({ reverseAnimation }) => {
    const etiquetasProyecto1 = [  "Next.js","Axios","FontAwesome","Tailwind CSS","JavaScript","OpenWeatherMap API",];
    const etiquetasProyecto2 = [    "Next.js","Firebase (Authentication and Firestore)","FontAwesome","Tailwind CSS",];
    const etiquetasProyecto3 = [    "HTML5", "FontAwesome","Tailwind CSS",];
    const etiquetasProyecto4 = [    "HTML5", "React icons","Tailwind CSS","Framer-motion", "Javascript","Next.js"];
    const etiquetasProyecto5 = [    "HTML5", "React icons","Tailwind CSS","Framer-motion", "Typescript","Next.js","Node.js", "Axios", "Set time API"];
    const [isAnimating, setIsAnimating] = useState(false);
    const [isAnimating2, setIsAnimating2] = useState(false);
    const [isAnimating3, setIsAnimating3] = useState(false);
    const [isReversed, setIsReversed] = useState(false);
    const targetRef1 = useRef(null);
    const targetRef2 = useRef(null)
    const targetRef3 = useRef(null)

    const reverse= () => {
        setIsReversed(!isReversed);
        setTimeout(() => {
            reverseAnimation(); 
        }, 1500);  
    };

    const varianfunctionforbar = () => {
        setIsAnimating(prevState => !prevState);};
    const varianfunctionforbar2 = () => {
        setIsAnimating2(prevState => !prevState);};
    const varianfunctionforbar3 = () => {
        setIsAnimating3(prevState => !prevState);};
    const animationVariants = {
        initial: { width: "42px", },
        animate: { width: "80px" },};

    useEffect(() => {
        const options = { root: null, rootMargin: '0px', threshold: 0.5,  };
        const observer1 = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsAnimating(true)
                } else {
                    setIsAnimating(false)
                }
            });
        }, options);
            const observer2 = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsAnimating2(true)
                } else {
                    setIsAnimating2(false)
                }
            });
        }, options);
        const observer3 = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsAnimating3(true)
                } else {
                    setIsAnimating3(false)
                }
            });
        }, options);
        if (targetRef1.current) {
            observer1.observe(targetRef1.current);}
        if (targetRef2.current) {
            observer2.observe(targetRef2.current);}
        if (targetRef3.current) {
            observer3.observe(targetRef3.current);}
        return () => {
            if (targetRef1.current) {
                observer1.unobserve(targetRef1.current);}
            if (targetRef2.current) {
                observer2.unobserve(targetRef2.current);}
            if (targetRef3.current) {
                observer3.unobserve(targetRef3.current);}
        };
        }, []);

        const scrolltarget1 = () => {
            const targetElement = document.querySelector('.target1');
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });}
            } 
        const scrolltarget2 = () => {
            const targetElement = document.querySelector('.target2');
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });}
            }
        const scrolltarget3 = () => {
            const targetElement = document.querySelector('.target3');
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });}
            } 


            
    return (
        <section className=' flex flex-col justify-center w-full text-tertiary'>

                <motion.header className='hidden lg:flex absolute top-5 left-5  w-full h-auto'
                        initial={{ opacity: 0, y: -20 }}
                        animate={isReversed ? { opacity: 0, y: -20 } :{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}>
                            <p className=' cursor-pointer flex items-center hover:opacity-80 transition duration-500' onClick={reverse}> 
                            <FaArrowAltCircleLeft className='ml-1 text-dark text-3xl' /></p>
                </motion.header>
                <div className='lg:ml-2/100 flex  lg:flex-row flex-col w-full mt-3/100 p-1/100'>
                    <div className='lg:w-45/100 w-full flex flex-col justify-center font-bold '>
                        <motion.h1 className='lg:text-7xl text-6xl text-primary font-bold px-5 lg:ml-10/100' 
                            initial={{ opacity: 0, x: -20 }}
                            animate={isReversed ? { opacity: 0, x: -20 } :{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}>Skills and proyects
                        </motion.h1>
                        <motion.p 
                        className='lg:w-60/100 text-md 2xl:text-lg text-tertiary lg:ml-14/100 ml-5/100  mt-4 '
                        initial={{ opacity: 0, x: -20 }}
                        animate={isReversed ? { opacity: 0, x: -20 } :{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay:0.6 }}>
                        Skilled in crafting captivating web applications 
                        and dynamic interfaces.</motion.p>
                        <ul className='lg:block hidden'>
                            <motion.div className="ml-13/100 mt-vh-5  "
                                initial={{ opacity: 0, y: -20 }}
                                animate={isReversed ? { opacity: 0, y: -20 } :{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay:0.5 }}>
                                <div className="items-center font-semibold w-max-auto 2xl:text-lg flex p-1 cursor-pointer"
                                    onMouseEnter={varianfunctionforbar}
                                    onMouseLeave={varianfunctionforbar}
                                    onClick={scrolltarget1} >
                                    <motion.div className="border-2 border-dark w-8 mr-2 rounded-3xl" 
                                        initial="initial"
                                        animate={isAnimating ? "animate" : "initial"}
                                        variants={animationVariants}
                                        transition={{ duration: 0.4 }}
                                    />
                                    About
                                </div>
                                <div className="flex items-center font-semibold mt-3/100 2xl:text-lg p-1 cursor-pointer"
                                    onMouseEnter={varianfunctionforbar2}
                                    onMouseLeave={varianfunctionforbar2}
                                    onClick={scrolltarget2}
                                >
                                    <motion.div className="border-2 border-dark 0 w-8 mr-2 rounded-3xl" 
                                        initial="initial"
                                        animate={isAnimating2 ? "animate" : "initial"}
                                        variants={animationVariants}
                                        transition={{ duration: 0.4 }}
                                    />
                                    Skills 
                                </div>
                                <div className="flex items-center font-semibold 2xl:text-lg mt-3/100 p-1 cursor-pointer"
                                    onMouseEnter={varianfunctionforbar3}
                                    onMouseLeave={varianfunctionforbar3}
                                    onClick={scrolltarget3}
                                >
                                    <motion.div className="border-2 border-dark w-8 mr-2 rounded-3xl"
                                        initial="initial"
                                        animate={isAnimating3 ? "animate" : "initial"}
                                        variants={animationVariants}
                                        transition={{ duration: 0.4 }}
                                    />
                                    Projects
                                </div>
                            </motion.div>
                        </ul>
                        <motion.div className='flex justify-around pr-50/100  lg:px-30/100 my-vh-7 lg:mt-vh-41'
                            initial={{ opacity: 0, y: 20 }}
                            animate={ isReversed ? { opacity: 0, y: 20 } :{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}>
                            <a href="https://www.linkedin.com/in/jefry-jonathan-mejia-176476240/" className="group flex flex-col items-center">
                                <FaLinkedin className="cursor-pointer hover:text-blue-800 text-3xl group-hover:text-opacity-100 group-hover:scale-100 transform scale-90 transition-transform duration-300" />
                                <div className="absolute hidden group-hover:block bg-gray-800 bg-opacity-60 text-white py-2 px-1 
                                rounded whitespace-nowrap transition-opacity duration-300  mt-9">
                                    LinkedIn
                                </div>
                            </a>
                            <a href="https://github.com/space-clover" className="group flex flex-col items-center">
                                <FaGithub className="cursor-pointer hover:text-black text-3xl group-hover:text-opacity-100 group-hover:scale-100 transform scale-90 transition-transform duration-300" />
                                <div className="absolute hidden group-hover:block bg-gray-800 bg-opacity-60 text-white py-2 px-1 
                                    rounded whitespace-nowrap transition-opacity duration-300  mt-9">
                                    GitHub
                                </div>
                            </a>
                            <a href="https://pdfhost.io/v/zkl~y8NHi_Neutral_Minimalist_Professional_Resume" className="group flex flex-col items-center">
                                <FaClipboard className="cursor-pointer hover:text-gray-700 text-3xl group-hover:text-opacity-100 group-hover:scale-100 transform scale-90 transition-transform duration-300" />
                                <div className="absolute hidden text-center group-hover:block bg-gray-800 bg-opacity-60 text-white py-2 px-1.5 
                                    rounded whitespace-nowrap transition-opacity duration-300  mt-9">
                                    Resume
                                </div>
                            </a>
                        </motion.div>
                    </div>
                    <motion.div className='lg:w-47/100 w-full flex flex-col lg:overflow-auto scrollbar-thin scrollbar-thumb-secondary max-h-vh-80'
                        initial={{ opacity: 0, x: 20 }}
                        animate={isReversed ? { opacity: 0, x: 20 } :{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay:0.7 }}>
                        <h3 className='font-extrabold mb-4 lg:hidden px-2/100' >ABOUT</h3>
                        <p className=' text-justify px-2/100 target1 2xl:text-lg ' ref={targetRef1} >
                        Hey there!, a web developer fueled by a passion for crafting visually appealing
                        and dynamic digital experiences. Proficient in technologies like Tailwind CSS, Next.js, Axios and Framer Motion, I specialize in
                        creating seamless user interfaces that captivate and engage. With a love for clean code and an eye for design, 
                        <br/> <br/> 
                        Im dedicated 
                        to turning innovative ideas into reality. Lets collaborate and bring your web projects to life with a touch of creativity and a 
                        dash of technology! Feel free to modify this text to match your personal style and preferences.
                        Some technologies I work with are: 
                        </p>
                        <h3 className='font-extrabold my-4 lg:hidden px-2/100' >SKILLS</h3>
                        <ul className='flex flex-wrap pt-8 justify-around w-full bg-neutral lg:justify-between target2' id='myskills' >
                            <li className="relative inline-block hover:text-orange-600 transition mb-2 duration-600">
                                <FaHtml5 className='lg:text-9xl text-8xl'/>
                                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition duration-700">
                                    <span className="bg-gray-800 bg-opacity-60 text-white p-2 rounded"> HTML5 </span>
                                </div>
                            </li>
                            <li className="relative inline-block hover:text-blue-600 transition mb-2  duration-600">
                                <FaCss3 className='lg:text-9xl text-8xl'/>
                                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition duration-700">
                                    <span className="bg-gray-800 bg-opacity-60 text-white p-2 rounded"> CSS3 </span>
                                </div>
                            </li>
                            <li className="relative inline-block hover:text-cyan-600 transition mb-2  duration-600">
                                <SiTailwindcss className='lg:text-9xl text-8xl'/>
                                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition duration-700">
                                    <span className="bg-gray-800 bg-opacity-60 text-white p-2 rounded"> Tailwind CSS </span>
                                </div>
                            </li>
                            <li className="relative inline-block hover:text-purple-600 transition mb-2  duration-600">
                                <SiBootstrap className='lg:text-9xl text-8xl'/>
                                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition duration-700">
                                    <span className="bg-gray-800 bg-opacity-60 text-white p-2 rounded"> Bootstrap</span>
                                </div>
                            </li>
                            <li className="relative inline-block hover:text-cyan-600 transition mb-2  duration-600">
                                <SiIonic className='lg:text-9xl text-8xl'/>
                                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition duration-700">
                                    <span className="bg-gray-800 bg-opacity-60 text-white p-2 rounded"> Ionic </span>
                                </div>
                            </li>
                            <li className="relative inline-block hover:text-yellow-500 transition mb-2 duration-600">
                                <SiJavascript className='lg:text-9xl text-8xl'/>
                                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition duration-700">
                                    <span className="bg-gray-800 bg-opacity-60 text-white p-2 rounded"> Javascript </span>
                                </div>
                            </li>
                            <li className="relative inline-block hover:text-blue-900 transition mb-2 duration-600">
                                <SiReact className='lg:text-9xl text-8xl'/>
                                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition duration-700">
                                    <span className="bg-gray-800 bg-opacity-60 text-white p-2 rounded"> React.js </span>
                                </div>
                            </li>
                            <li className="relative inline-block hover:text-blue-900 transition mb-2 duration-600">
                                <SiTypescript className='lg:text-9xl text-8xl'/>
                                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition duration-700">
                                    <span className="bg-gray-800 bg-opacity-60 text-white p-2 rounded"> Typescript </span>
                                </div>
                            </li>
                            <li className="relative inline-block hover:text-green-900 transition mb-2 duration-600">
                                <SiNodedotjs className='lg:text-9xl text-8xl'/>
                                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition duration-700">
                                    <span className="bg-gray-800 bg-opacity-60 text-white p-2 rounded"> Node.js </span>
                                </div>
                            </li>
                            <li className="relative inline-block hover:text-purple-600 transition  mb-2 duration-600">
                                <FaFigma className='lg:text-9xl text-8xl'/>
                                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition duration-700">
                                    <span className="bg-gray-800 bg-opacity-60 text-white p-2 rounded"> Figma </span>
                                </div>
                            </li>
                            <li className="relative inline-block hover:text-orange-600 transition mb-2 duration-600">
                                <FaGitAlt className='lg:text-9xl text-8xl'/>
                                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition duration-700">
                                    <span className="bg-gray-800 bg-opacity-60 text-white p-2 rounded"> GIT </span>
                                </div>
                            </li>
                            <li className="relative inline-block hover:text-purple-500 transition mb-2  duration-600">
                                <SiAxios className='lg:text-9xl text-8xl'/>
                                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition duration-700">
                                    <span className="bg-gray-800 bg-opacity-60 text-white p-2 rounded"> AXIOS </span>
                                </div>
                            </li>
                            <li className="relative inline-block hover:text-purple-900 transition mb-2  duration-600">
                                <SiFramer className='lg:text-9xl text-8xl'/>
                                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition duration-700">
                                    <span className="bg-gray-800 bg-opacity-60 text-white p-2 rounded">framer-motion</span>
                                </div>
                            </li>
                            <li className="relative inline-block hover:text-gray-600 transition mb-2  duration-600">
                                <FaDesktop className='lg:text-9xl text-8xl'/>
                                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition duration-700">
                                    <span className="bg-gray-800 bg-opacity-60 text-white p-2 rounded text-center">Remote Desktop</span>
                                </div>
                            </li>
                            <li className="relative inline-block hover:text-orange-600 transition mb-2 duration-600">
                                <SiFirebase className='lg:text-9xl text-8xl'/>
                                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition duration-700">
                                    <span className="bg-gray-800 bg-opacity-60 text-white p-2 rounded">Firebase</span>
                                </div>
                            </li>
                            <li className="relative inline-block hover:text-cyan-700 transition mb-2  duration-600">
                                <SiWordpress className='lg:text-9xl text-8xl'/>
                                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition duration-700">
                                    <span className="bg-gray-800 bg-opacity-60 text-white p-2 rounded">Wordpress</span>
                                </div>
                            </li>
                            <li   className="relative inline-block hover:text-black transition mb-2 duration-600">
                                <SiNextdotjs className='lg:text-9xl text-8xl'/>
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
                                <div ref={targetRef2} />
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
                        <ul className='pt-vh-1  bg-neutral target3 ' ref={targetRef3}>
                        <ProyectCard
                            reftoproyectlink="https://comfy-vacherin-3a5e09.netlify.app/"
                            refttoproyect="https://github.com/space-clover/Todo-app/tree/Local"
                            titulo="Todo App (Toritetsu)"
                            descripcion="Toritetsu is a versatile and user-friendly task management tool that allows
                            users to efficiently create, organize, and track their tasks and to-do lists. The app was 
                            created using Next.js for the frontend, powered by Node.js on the backend, and styled with 
                            Tailwind CSS. It is designed to help users improve their productivity, 
                            effectively manage their time, and stay organized in their personal and professional life."
                            etiquetas={etiquetasProyecto5}
                            IMG="/./Todo_app.png"
                            />
                            <ProyectCard
                            reftoproyectlink="https://gleeful-speculoos-003b1f.netlify.app/"
                            refttoproyect="https://github.com/space-clover/Sneakers_Shop"
                            titulo="Deplace Masion"
                            descripcion="This Sneaker E-Commerce Practice Page serves as a showcase of my frontend
                            development and web design skills. Inspired by the homepage of a sneaker 
                            store, this creation blends eye-catching visuals with elegant functionality."
                            etiquetas={etiquetasProyecto4}
                            IMG="/./Sneaker_web.png"
                            />
                            <ProyectCard
                            reftoproyectlink="https://sparkling-axolotl-9db9eb.netlify.app"
                            refttoproyect="https://github.com/space-clover/Wheater-public"
                            titulo="Wheater app"
                            descripcion="This is a React-based Weather Web App that enables users to retrieve current weather 
                            conditions and a 5-day forecast for a specific city. Users can input the city name, triggering API 
                            requests to OpenWeatherMap. The application uses state management via the useState hook to handle 
                            weather data, forecasts, highlights, and error messages. The user interface is divided 
                            into sections for search and current weather display, alongside a forecast and highlights section. "
                            etiquetas={etiquetasProyecto1}
                            IMG="/./Climate_web.png"
                            />
                            <ProyectCard
                            titulo="Chat app"
                            reftoproyectlink="https://dashing-selkie-e9942a.netlify.app"
                            refttoproyect="https://github.com/space-clover/chatapp"
                            descripcion="Introducing an real-time chat application developed using Firebase as the 
                            primary source for instant message storage and synchronization. Integrated with the cutting-edge 
                            technologies of Next.js and Tailwind CSS, this application redefines the way users communicate.
                            Leveraging Firebase Realtime Database, messages are delivered and updated instantly across devices. "
                            etiquetas={etiquetasProyecto2} 
                            IMG="/./Chat_web.png"
                            />
                            <ProyectCard
                            titulo="Older Portfolio"
                            reftoproyectlink="https://oldportafolio.netlify.app/"
                            refttoproyect="https://github.com/space-clover/Portfolio"
                            descripcion="Allow me to introduce my personal portfolio, a unique creation crafted using 
                            the powerful combination of Tailwind CSS, HTML, and JavaScript. Each aspect of the design has 
                            been meticulously curated to showcase my work and skills in a striking manner. Leveraging the 
                            flexibility of Tailwind CSS, 
                            I've achieved a modern and highly customized interface that seamlessly adapts to various devices.  "
                            etiquetas={etiquetasProyecto3} 
                            IMG="/./Portfolio_web.png"
                            />
                        </ul>
                        <p className='2xl:text-md'>Loosely designed in Figma and coded in Visual Studio Code by yours truly. Built with Next.js 
                        Framer-Motion and Tailwind CSS, deployed with Netlify.</p>
                    </motion.div>
                </div>

        </section>
    )
}

export default Main_index_section