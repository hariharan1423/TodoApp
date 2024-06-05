import React from "react";
import ListItem from "./ListItem";

export default function ListItems({ todoList , setTodoList ,handleSubmit }) {
  return (
    <ul id="listItem">
      {todoList.map((todo) => {
        return <ListItem key={todo.id} todo={todo} setTodoList={setTodoList} handleSubmit={handleSubmit}></ListItem>;
      })}
    </ul>
  );
}
