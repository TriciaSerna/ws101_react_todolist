import React, {useEffect} from "react";
import { v4 as uuid4 } from "uuid";

const Form = ({ input, setInput, todos, setTodos,editTodo,setEditTodo }) => {
  const updateTodo = (title,id,completed) => {
    const newTodo= todos.map((todos) => 
      todos.id === id ? {title, id, completed} : todos
    );
    setTodos(newTodo);
    setEditTodo('');
  };
  useEffect(() => {
    if(editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput,editTodo]);
  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editTodo){
      setTodos([...todos, { id: uuid4(), title: input, completed: false }]);
    setInput("");
    } else {
      updateTodo( input, editTodo.id,editTodo.completed)
    }

  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter ..."
        className="task-input"
        value={input}
        required
        onChange={onInputChange}
      />
      <button className="button-add" type="submit">
        {editTodo ? "Change" : "Add"}
      </button>
    </form>
  );
};

export default Form;