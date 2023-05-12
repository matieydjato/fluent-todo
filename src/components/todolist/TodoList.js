import Todo from "../todo/Todo";

// Todolist component
const TodoList = ({data}) => {
    return(
        // Mapping props data and call Todo component
        data.map((todo) => <Todo key={todo.id} id={todo.id} value={todo.value} done={todo.done}/>)
    )
};

export default TodoList;