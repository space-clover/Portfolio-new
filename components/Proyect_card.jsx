import React from 'react';

const ProyectCard = ({ titulo, descripcion, etiquetas, src }) => {
    return (
        <div className='flex w-full h-auto'> 
            <img src={src}   alt="" />
            <div>
                <h3 className='text-lg text-gray-800'>{titulo}</h3>
                <p className='text-sm text-gray-700' >{descripcion}</p>
                <ul className='flex justify-around w-full'>
                    {etiquetas.map((etiqueta, index) => (
                        <li className=' px-1 py-0.5 rounded-lg bg-slate-500 text-slate-800' key={index}>{etiqueta}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ProyectCard;