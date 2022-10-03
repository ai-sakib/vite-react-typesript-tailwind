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
    return (
        <div>
            <NewTodo onAddNewTodo={addNewTodoHandler} />
            <Todos items={persons} />
        </div>
    )
}

export default App
