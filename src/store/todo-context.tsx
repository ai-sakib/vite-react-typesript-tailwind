import React, { useState } from 'react'
import Person from '../models/persons'

type TodoContextObj = {
    items: Person[]
    addTodo: (name: string, age: number) => void
    deleteTodo: (id: number) => void
}

const TodoContext = React.createContext<TodoContextObj>({
    items: [],
    addTodo: () => {},
    deleteTodo: () => {},
})

type ContextProps = {
    children: React.ReactNode
}

export const TodoContextProvider: React.FC<ContextProps> = ({ children }) => {
    const [persons, setPersons] = useState<Person[]>([])

    const addNewTodoHandler = (name: string, age: number) => {
        console.log('addNewTodoHandler', name, age)
        const newPerson = new Person(name, age)
        setPersons(prevPersons => {
            return prevPersons.concat(newPerson)
        })
    }

    const deleteItemHandler = (personId: number) => {
        setPersons(prevPersons => {
            return prevPersons.filter(item => item.id !== personId)
        })
    }

    const contextValue: TodoContextObj = {
        items: persons,
        addTodo: addNewTodoHandler,
        deleteTodo: deleteItemHandler,
    }

    return (
        <TodoContext.Provider value={contextValue}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContext
