import Person from './../models/persons'

const TodoItem: React.FC<{
    onDelete: () => void
    item: Person
}> = props => {
    const item = props.item

    return (
        <li
            className='my-4 p-4 rounded cursor-pointer bg-emerald-400 text-white hover:bg-red-500 duration-300 select-none'
            onClick={props.onDelete}>
            {item.id} {'->'} Name: {item.name}, Age: {item.age}
        </li>
    )
}

export default TodoItem
