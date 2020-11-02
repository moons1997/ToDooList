import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
  const [tods, setTods] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTods = [todo, ...tods];
    setTods(newTods);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTods((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removeArr = [...tods].filter((todo) => todo.id !== id);
    setTods(removeArr);
  };

  const completeTodo = (id) => {
    let updatedTods = tods.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });

    setTods(updatedTods);
  };

  return (
    <div>
      <h1>What's the Plan for Today ?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        tods={tods}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default TodoList;
