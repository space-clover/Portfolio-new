import React from 'react'
import {FaArrowUp } from 'react-icons/fa';
const { motion } = require("framer-motion");

const Skill_card = ({titulo, descripcion}) => {
    return (
        <motion.div className='lg:flex w-95/100 h-auto px-4 py-3  hover:bg-slate-400 hover:bg-opacity-10  
        hover:shadow-md hover:shadow-slate-400  transition duration-300 rounded-xl my-2'> 
            <h3 className=' lg:w-1/4 text-lg 2xl:text-xl text-center flex items-center mr-4 text-dark font-bold'>{titulo}</h3>
            <p className=' lg:w-3/4 text-sm 2xl:text-lg text-primary mt-2 text-justify' >{descripcion}</p>
        </motion.div>
    )
}


export default Skill_card