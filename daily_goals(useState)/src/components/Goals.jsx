import React from 'react'

const Goals = ({ index, title, description, deleteTaskHandeler }) => {


    const btnStyle = 'bg-red-700 hover:bg-red-600 rounded-full w-[30px] h-[30px] font-semibold flex justify-center items-center'

    return (
        <div className='flex justify-between items-center px-10 py-4 border rounded-md mt-4'>
            <div>
                <h4 className='text-xl font-medium text-gray-900'>{title}</h4>
                <p className='font-light text-gray-600'>{description}</p>
            </div>
            <button
                className={btnStyle}
                onClick={() => deleteTaskHandeler(index)}
            >
                <span className='w-[12px] h-[4px] bg-white'></span>
            </button>
        </div>
    )
}

export default Goals