import React from 'react';
import {FaArrowUp } from 'react-icons/fa';
const { motion } = require("framer-motion");

const ProyectCard = ({ titulo, descripcion, etiquetas, IMG }) => {
    const hoverAnimation = {
        scale: 1.1,
        transition: { duration: 0.3 },
    };

    return (
        <motion.div className='flex w-full h-auto px-4 py-3  hover:bg-slate-400 hover:bg-opacity-10  
        hover:shadow-md hover:shadow-slate-400  transition duration-500 rounded-xl my-2'> 
            <div className="w-1/4 px-2 flex items-center justify-center"> {IMG} </div>
            <div className='w-3/4'>
                <h3 className='text-lg flex items-center text-gray-800 font-bold'>{titulo} <FaArrowUp className=' text-xs ml-2'/> </h3>
                <p className='text-sm text-gray-700 mt-2 text-justify' >{descripcion}</p>
                <ul className='flex  w-full mt-3 flex-wrap '>
                    {etiquetas.map((etiqueta, index) => (
                        <li className=' px-3 py-0.5 text-sm rounded-lg mr-2 mb-2 bg-slate-500 text-slate-100 bg-opacity-75' key={index}>{etiqueta}</li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
}

export default ProyectCard;