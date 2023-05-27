const TodoListItem = ({todos, onRemoveTodo,onCopletedTodo})=>{

    return todos.map(todo=>{
      return (
        <div className="todo-list-item" key = {todo.id} >
              <label>
                <input
                type="checkbox"
                checked = {todo.isCompleted}
                onChange={() => onCopletedTodo(todo.id)}
                />
                <span>{todo.text}</span>
              </label>
              <button onClick={() => onRemoveTodo(todo.id)}>
                Remove
              </button>
              </div>         
        )
    });
};

export default TodoListItem;



