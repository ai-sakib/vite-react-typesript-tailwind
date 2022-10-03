import React from 'react'

import Person from '../models/persons'
import TodoItem from './TodoItem'

const Todos: React.FC<{
    onDelete: (id: number) => void
    items: Person[]
}> = props => {
    return (
        <div>
            <h1 className='text-3xl font-bold'>Todos</h1>
            <ul>
                {props.items.map(item => (
                    <TodoItem
                        key={item.id}
                        item={item}
                        onDelete={props.onDelete.bind(null, item.id)}
                    />
                ))}
            </ul>
        </div>
    )
}

export default Todos
