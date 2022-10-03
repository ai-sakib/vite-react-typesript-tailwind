import React from 'react'
import TodoContext from '../store/todo-context'
import { useContext } from 'react'

import TodoItem from './TodoItem'

const Todos: React.FC = () => {
    const todoCtx = useContext(TodoContext)
    return (
        <div>
            <h1 className='text-3xl font-bold'>Todos</h1>
            <ul>
                {todoCtx.items.map(item => (
                    <TodoItem
                        key={item.id}
                        item={item}
                        onDelete={todoCtx.deleteTodo.bind(null, item.id)}
                    />
                ))}
            </ul>
        </div>
    )
}

export default Todos
