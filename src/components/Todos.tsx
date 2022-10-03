import Person from '../models/persons'
import TodoItem from './TodoItem'

const Todos: React.FC<{ items: Person[] }> = props => {
    return (
        <div>
            <h1>Todos</h1>
            <ul>
                {props.items.map(item => (
                    <TodoItem key={item.id} item={item} />
                ))}
            </ul>
        </div>
    )
}

export default Todos
