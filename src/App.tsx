import { useState } from 'react'

import NewTodo from './components/NewTodo'
import Todos from './components/Todos'
import Person from './models/persons'

const items = [new Person('sakib', 25), new Person('asif', 26)]

const App = () => {
    const [persons, setPersons] = useState<Person[]>(items)

    const addNewTodoHandler = (name: string, age: number) => {
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
    return (
        <div className='mx-48 my-16'>
            <NewTodo onAddNewTodo={addNewTodoHandler} />
            <Todos onDelete={deleteItemHandler} items={persons} />
        </div>
    )
}

export default App
