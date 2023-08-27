"use client";
import React, {useState} from 'react'
import { FaAd, FaClipboard, FaClock, FaGithub, FaLinkedin } from 'react-icons/fa';
const { motion } = require("framer-motion");
import ProyectCard from './Proyect_card';
const Main_index_section = () => {
    const etiquetasProyecto1 = ["Etiqueta 1", "Etiqueta 2"];
    return (
        <section className=' flex flex-col justify-center w-full h-auto text-gray-800 '>
                <header className='w-full h-auto'>
                    <nav className='w-full flex justify-around px-15/100 py-1/100 border-b border-gray-800'>
                            <p>About me</p>
                            <p>Thoughts</p>
                            <p>Contact</p>
                    </nav>
                </header>
                <div className='flex w-full mt-5/100 p-1/100'>
                    <div className='w-50/100 flex flex-col justify-cente '>
                        <h1 className='text-7xl font-bold ml-10/100' >Skills and proyects
                        </h1>
                        <p></p>
                        <p className=' flex items-center font-semibold ml-13/100 mt-8/100'> <div  className='border-2 border-blue-700 w-6 mr-2 rounded-3xl' /> About</p>
                        <p className=' flex items-center font-semibold ml-13/100 mt-3/100'> <div  className='border-2 border-blue-700 w-6 mr-2 rounded-3xl' />Skills section</p>
                        <p className=' flex items-center font-semibold ml-13/100 mt-3/100'> <div  className='border-2 border-blue-700 w-6 mr-2 rounded-3xl' />My Proyects</p>
                        <div className='flex justify-around  px-35/100 mt-55/100'> 
                            <FaLinkedin className=' cursor-pointer hover:text-blue-800 text-3xl' />
                            <FaGithub className=' cursor-pointer hover:text-black text-3xl' />
                            <FaClipboard className=' cursor-pointer hover:text-gray-700 text-3xl' />
                        </div>
                    </div>

                    <div className='w-50/100 p-2/100 '>
                        <p className=' text-justify'>
                        Hey there!, a web developer fueled by a passion for crafting visually appealing
                        and dynamic digital experiences. Proficient in technologies like Tailwind CSS, Next.js, Axios and Framer Motion, I specialize in
                        creating seamless user interfaces that captivate and engage. With a love for clean code and an eye for design, 
                        <br/> <br/>
                        I'm dedicated 
                        to turning innovative ideas into reality. Let's collaborate and bring your web projects to life with a touch of creativity and a 
                        dash of technology! Feel free to modify this text to match your personal style and preferences.
                        </p>
                        <div>
                            <ProyectCard
                            titulo="Proyecto Uno"
                            descripcion="Descripción del primer proyecto"
                            etiquetas={etiquetasProyecto1}/>

                        </div>
                    </div>
                </div>
        </section>
    )
}

export default Main_index_section