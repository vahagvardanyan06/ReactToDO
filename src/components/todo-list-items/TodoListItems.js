import TodoListItem from "../todo-list-item/TodoListItem";
const TodoListItems = ({todos,onEditTodo, onRemoveTodo,onCopletedTodo})=>{

    return (
        <div className="todo-list-items">
          <TodoListItem
           todos = {todos}
            onRemoveTodo={onRemoveTodo}
            onCopletedTodo= {onCopletedTodo}
            />
        </div>
    );
};

export default TodoListItems;