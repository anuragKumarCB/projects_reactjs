import React from 'react'
import posterImg from "../assets/poster.webp"

const Card = ({ img }) => {
    return (
        <div className='h-[250px] min-w-[180px] bg-gray-700 overflow-hidden'>
            <img className='h-full w-full hover:scale-110 transition-[0.5]' src={img} alt="" />
        </div>
    )
}

export default Card