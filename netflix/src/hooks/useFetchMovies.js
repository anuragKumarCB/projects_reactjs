import axios from "axios"
import { useEffect, useState } from "react"

const apiKey = import.meta.env.VITE_TMDB_API_KEY
const url = "https://api.themoviedb.org/3/movie"

const useFetchMovie = (category) => {

    const [movies, setMovies] = useState([])

    useEffect(() => {

        const fetchMovies = async () => {
            try {
                const { data: { results } } = await axios.get(`${url}/${category}?api_key=${apiKey}`)
                setMovies(results)
            } catch (error) {
                console.error(`Error fetching ${category} movies :`, error)
            }
        }
        fetchMovies()
    }, [category])

    return movies
}

export default useFetchMovie