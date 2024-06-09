import { imgUrl } from '../enum'
import Card from './Card'

const Row = ({ title, moviesArray }) => {

    return (
        <div className='bg-gray-800 px-4 overflow-x-auto'>
            <h2 className='py-3 text-xl font-medium'>{title}</h2>
            <div className='flex gap-2 overflow-auto'>
                {
                    moviesArray.map((movie) => (
                        <Card key={movie.id} img={`${imgUrl}/${movie.poster_path}`} />
                    ))
                }
            </div>
        </div>
    )
}

export default Row