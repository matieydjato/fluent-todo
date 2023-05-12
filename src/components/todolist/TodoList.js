import Todo from "../todo/Todo";

const PivotContent = ({data}) => {
    return(
        data.map((todo, index) => <Todo key={index} id={todo.id} value={todo.value} done={todo.done}/>)
    )
};

export default PivotContent;