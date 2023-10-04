import React from 'react';
import Image from 'next/image';
import {FaArrowUp, FaArrowsAlt, FaDownload, FaGithub, FaGithubSquare, FaLink, FaLongArrowAltUp, FaSquarespace } from 'react-icons/fa';
const { motion } = require("framer-motion");

const ProyectCard = ({ titulo, descripcion, etiquetas, IMG, reftoproyectlink, refttoproyect, }) => {
    const hoverAnimation = {
        scale: 1.1,
        transition: { duration: 0.3 },
    };

    return (
        <motion.div className=' lg:flex w-full h-auto px-4 py-3  hover:bg-slate-400 group hover:bg-opacity-10  
        hover:shadow-md hover:shadow-slate-400  transition duration-300 rounded-xl my-4'>
            <div className='lg:w-30/100 px-2 flex lg:items-start py-4 justify-center lg:justify-start'>
            <Image
                src={IMG}
                className=' border-primary border-4 border-opacity-5 group-hover:border-opacity-10 transition duration-300 rounded-md ' 
                alt="project"
                width={150} 
                height={100}/>
            </div>

            <div className='lg:w-70/100'>
                <h3 className='text-lg 2xl:text-xl py-1/100 flex items-center text-dark font-bold'>{titulo} 
                <a href={reftoproyectlink}><FaLink className=' text-md mx-2 hover:text-gray-500 transition cursor-pointer duration-500'/></a> 
                <a href={refttoproyect}> <FaGithub className=' text-xl mx-1 hover:text-black transition cursor-pointer duration-500'/></a> </h3>
                <p className='text-sm 2xl:text-lg text-primary mt-2 text-justify' >{descripcion}</p>
                <ul className='flex  w-full mt-3 flex-wrap '>
                    {etiquetas.map((etiqueta, index) => (
                        <li className=' 2xl:text-md px-3 py-0.5 text-sm rounded-lg mr-2 mb-2 bg-dark text-slate-100 bg-opacity-75' key={index}>{etiqueta}</li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
}

export default ProyectCard;