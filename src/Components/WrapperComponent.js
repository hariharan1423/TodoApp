import React, { useEffect, useState } from "react";
import FormComponent from "./FormComponent";
import ListItems from "./ListItems";

export default function WrapperComponent() {
  const [titleName, setTitleName] = useState("");
  const [error, setError] = useState(false);
  const [todoList, setTodoList] = useState(() => {
    const list = localStorage.getItem("TODOLIST");
    if (list) {
      return JSON.parse(list);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("TODOLIST", JSON.stringify(todoList));
  }, [todoList]);

  function handleSubmit(e, id) {
    e.preventDefault();
    if (todoList.filter((todo) => todo.id === id).length > 0) {
      setTodoList((currentList) => {
        return currentList.map((todo) => {
          const editCount = todo.editCount + 1;
          const dateTime = new Date();
          const date =
            dateTime.getDate() +
            "-" +
            (dateTime.getMonth() + 1) +
            "-" +
            dateTime.getFullYear();
          if (todo.id === id) {
            return {
              ...todo,
              date: date,
              edit: false,
              editCount: editCount,
            };
          } else {
            return todo;
          }
        });
      });
    } else {
      if (titleName === "") {
        setError(true);
        return;
      } else {
        setError(false);
      }
      const dateTime = new Date();
      const date =
        dateTime.getDate() +
        "-" +
        (dateTime.getMonth() + 1) +
        "-" +
        dateTime.getFullYear();
      const listDetails = {
        id: crypto.randomUUID(),
        title: titleName,
        date: date,
        completed: false,
        edit: false,
        editCount: 0,
      };
      setTodoList((currentList) => {
        return [listDetails, ...currentList];
      });
      setTitleName("");
    }
  }

  return (
    <>
      <FormComponent
        handleSubmit={handleSubmit}
        titleName={titleName}
        error={error}
        setTitleName={setTitleName}

      ></FormComponent>
      <ListItems
        todoList={todoList}
        setTodoList={setTodoList}
        handleSubmit={handleSubmit}
      ></ListItems>
    </>
  );
}
