import { useRef } from 'react'
import TodoContext from '../store/todo-context'
import { useContext } from 'react'

const NewTodo: React.FC = props => {
    const todoCtx = useContext(TodoContext)

    const nameRef = useRef<HTMLInputElement>(null)
    const ageRef = useRef<HTMLInputElement>(null)

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()

        const name = nameRef.current!.value
        const age = ageRef.current!.value

        console.log('submitHandler', name, age)
        todoCtx.addTodo(name, +age)
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='flex gap-4 w-full'>
                <div className='flex flex-col gap-1 w-full'>
                    <label htmlFor='name'>Name</label>
                    <input
                        className='focus:outline-none border border-cyan-500 rounded px-2 py-1'
                        id='name'
                        type='text'
                        ref={nameRef}
                        required
                    />
                </div>
                <div className='flex flex-col gap-1 w-full'>
                    <label htmlFor='age'>Age</label>
                    <input
                        className='focus:outline-none border border-cyan-500 rounded px-2 py-1'
                        id='age'
                        type='number'
                        ref={ageRef}
                        required
                    />
                </div>
            </div>
            <button className='my-4 text-white bg-cyan-500 hover:bg-cyan-700 rounded px-4 py-2 hover:scale-105 duration-300'>
                Submit
            </button>
        </form>
    )
}

export default NewTodo
