import React from 'react'
import {FaArrowUp } from 'react-icons/fa';
const { motion } = require("framer-motion");

const Skill_card = ({titulo, descripcion}) => {
    return (
        <motion.div className='flex w-full h-auto px-4 py-3  hover:bg-slate-400 hover:bg-opacity-10  
        hover:shadow-md hover:shadow-slate-400  transition duration-500 rounded-xl my-2'> 
            <h3 className=' w-1/4 text-lg text-center flex items-center mr-4 text-gray-800 font-bold'>{titulo}</h3>
            <p className=' w-3/4 text-sm text-gray-700 mt-2 text-justify' >{descripcion}</p>
        </motion.div>
    )
}


export default Skill_card