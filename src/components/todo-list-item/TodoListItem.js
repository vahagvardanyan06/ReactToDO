

const TodoListItem = ({todos,onEditTodo, onRemoveTodo,onCopletedTodo})=>{

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
               {/* <input value={todo.text} type="text"/> */}
              </label>
              <button className="remove_button" onClick={() => onRemoveTodo(todo.id)}>
                Remove
              </button>
              </div>         
        )
    });
};

export default TodoListItem;



