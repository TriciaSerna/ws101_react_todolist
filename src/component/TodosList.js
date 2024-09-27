import React from 'react';

const TodosList = ({ todos, setTodos, setEditTodo }) => {
    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return { ...item, completed: !item.completed };
                }
                return item;
            })
        );
    };
    const handleEdit = ({ id }) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    };

    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div>
            {todos.map((todo) => (
                <li className='list-item' key={todo.id}>
                    <input
                        type='text'
                        value={todo.title}
                        className={`list ${todo.completed ? "completed" : ""}`}
                        onChange={(event) => console.log(event.target.value)} 
                    />
                    <div>
                        <button
                            className={`button-complete task-buttton ${todo.completed ? "completed-task" : ""}`}
                            onClick={() => handleComplete(todo)}
                        >
                            {todo.completed ? "Undo" : "Done Task"}
                        </button>
                        <button className='button-edit task-buttton' onClick={() => handleEdit(todo)}>
                            Edit
                        </button>
                        <button className='button-delete task-buttton' onClick={() => handleDelete(todo)}>
                            Delete
                        </button>
                    </div>
                </li>
            ))}
        </div>
    );
};

export default TodosList;