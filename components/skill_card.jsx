
import React from 'react'
import { Fa500Px } from 'react-icons/fa'

const Skill_card = (icon, texto) => {
    return (
        <div className="relative inline-block hover:text-orange-600 transition duration-600">
            <div> {icon} </div>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition duration-700">
                <span className="bg-gray-800 text-white p-2 rounded"> {texto} </span>
            </div>
        </div>
    )
}

export default Skill_card