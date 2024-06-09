import axios from 'axios';
import React, { useState, useEffect } from 'react'
import useFetchMovie from '../hooks/useFetchMovies';
import { imgUrl } from '../enum';

const Banner = () => {

    const [randomItem, setRandomItem] = useState(null)

    const upcomingMovies = useFetchMovie("upcoming")



    useEffect(() => {
        if (upcomingMovies.length > 0) {
            const randomIndex = Math.floor(Math.random() * upcomingMovies.length)
            setRandomItem(upcomingMovies[randomIndex]);
        }
    }, [upcomingMovies])

    return (
        <div className='h-[600px] w-full bg-gray-900'>
            {randomItem &&
                <img
                    className='h-full w-full object-cover object-center'
                    src={`${imgUrl}/${randomItem.poster_path}`}
                    alt="banner_img" />}
        </div>
    )
}

export default Banner