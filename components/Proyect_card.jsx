import React from 'react';
import {FaArrowUp } from 'react-icons/fa';

const ProyectCard = ({ titulo, descripcion, etiquetas, IMG }) => {
    return (
        <div className='flex w-full h-auto p-4 border border-black rounded-xl'> 
            <div className="w-full px-2 flex items-center justify-center"> {IMG} </div>
            <div>
                <h3 className='text-lg flex items-center text-gray-800 font-bold'>{titulo} <FaArrowUp className=' text-xs ml-2'/> </h3>
                <p className='text-sm text-gray-700 mt-2 text-justify' >{descripcion}</p>
                <ul className='flex  w-full mt-3 flex-wrap '>
                    {etiquetas.map((etiqueta, index) => (
                        <li className=' px-3 py-0.5 text-sm rounded-3xl mr-2 bg-slate-500 text-slate-100 bg-opacity-75' key={index}>{etiqueta}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ProyectCard;