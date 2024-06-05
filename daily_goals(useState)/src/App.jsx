import { useState } from 'react'
import Header from './components/Header'
import Goals from './components/Goals'

function App() {

  const [id, setId] = useState(1)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [goals, setGoals] = useState([])

  const addTaskHandler = (e) => {
    e.preventDefault()
    setId(prev => prev + 1)
    setGoals(prev => [...prev, { id, title, description }])
    setTitle("")
    setDescription("")
  }

  const deleteTaskHandeler = (id) => {
    const updatedGoals = goals.filter(goal => goal.id !== id)
    setGoals(updatedGoals)
  }

  const inputStyle = "py-2 px-4 border focus:outline-none rounded-md text-gray-600"
  const btnStyle = "bg-teal-600 hover:bg-teal-500 px-6 py-2 text-white text-lg rounded-md mt-8"
  return (
    <>
      <Header />
      <div className='container max-w-[900px] mx-auto'>

        <form
          onSubmit={addTaskHandler}
          className=' flex flex-col gap-4 mt-10 border rounded-md p-10'>

          <input
            className={inputStyle}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            name="title"
            id="title"
            placeholder='Title' />

          <input
            className={inputStyle}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            name="description"
            id="description"
            placeholder='Description' />

          <button className={btnStyle} type='submit'>Add Goal</button>
        </form>

        {
          goals.map((goal) => (
            <Goals
              key={goal.id}
              id={goal.id}
              title={goal.title}
              description={goal.description}
              deleteTaskHandeler={deleteTaskHandeler} />
          ))
        }
      </div>
    </>
  )
}

export default App
