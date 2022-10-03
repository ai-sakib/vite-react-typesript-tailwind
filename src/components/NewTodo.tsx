import { useRef } from 'react'

const NewTodo: React.FC<{
    onAddNewTodo: (name: string, age: number) => void
}> = props => {
    const nameRef = useRef<HTMLInputElement>(null)
    const ageRef = useRef<HTMLInputElement>(null)

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()

        const name = nameRef.current!.value
        const age = ageRef.current!.value

        props.onAddNewTodo(name, +age)
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor='name'>Name</label>
                <input
                    className='border border-black'
                    id='name'
                    type='text'
                    ref={nameRef}
                />
            </div>
            <div>
                <label htmlFor='age'>Age</label>
                <input
                    className='border border-black'
                    id='age'
                    type='number'
                    ref={ageRef}
                />
            </div>

            <button className='text-white bg-cyan-500 hover:bg-cyan-700 rounded px-2 py-1 hover:scale-105 duration-300'>
                Submit
            </button>
        </form>
    )
}

export default NewTodo
