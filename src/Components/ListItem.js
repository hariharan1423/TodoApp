import React from "react";

export default function ListItem({ todo, setTodoList, handleSubmit }) {
  function handleEditName(title, id) {
    setTodoList((currentList) => {
      return currentList.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title: title,
          };
        }
        return todo;
      });
    });
  }

  function handleChecked(id, completed) {
    setTodoList((currentList) => {
      return currentList.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: completed,
          };
        }
        return todo;
      });
    });
  }

  function handleDelete(id) {
    setTodoList((currentList) => {
      return currentList.filter((todo) => todo.id !== id);
    });
  }

  function handleEdit(id) {
    setTodoList((currentList) => {
      return currentList.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            edit: true,
          };
        }
        return todo;
      });
    });
  }

  return (
    <div className="card" key={todo.id}>
      <li>
        {todo.edit ? (
          <div className="edit">
            <input
              type="text"
              className="editText"
              value={todo.title}
              onChange={(e) => handleEditName(e.target.value, todo.id)}
            />
            <button
              className="submitBtn"
              onClick={(e) => handleSubmit(e, todo.id)}
            >
              Submit
            </button>
          </div>
        ) : (
          <>
            <input
              type="checkbox"
              id={todo.id}
              checked={todo.completed}
              onChange={(e) => handleChecked(todo.id, e.target.checked)}
            />
            {todo.completed ? (
              <label
                htmlFor={todo.id}
                style={{ textDecoration: "line-through" }}
              >
                {todo.title}
              </label>
            ) : (
              <label htmlFor={todo.id}>{todo.title}</label>
            )}
          </>
        )}
      </li>

      <div className="buttons">
        <button
          className="danger"
          onClick={() => {
            handleDelete(todo.id);
          }}
        >
          Delete
        </button>
        <button
          className="editBtn"
          onClick={() => {
            handleEdit(todo.id);
          }}
        >
          Edit
        </button>
      </div>
      <div className="details">
        {todo.editCount > 0 ? (
          <p className="startDate">Edited at: {todo.date}</p>
        ) : (
          <p className="startDate">Added at: {todo.date}</p>
        )}
      </div>
    </div>
  );
}
