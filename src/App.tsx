import { TodoContextProvider } from './store/todo-context'
import NewTodo from './components/NewTodo'
import Todos from './components/Todos'

const App = () => {
    return (
        <div className='mx-48 my-16'>
            <TodoContextProvider>
                <NewTodo />
                <Todos />
            </TodoContextProvider>
        </div>
    )
}

export default App
