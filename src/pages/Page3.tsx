import React, { useState } from "react";
import Button from "../components/Button";
import TodoCard from "../components/TodoCard";
interface todoType {
  title: string;
  body: string;
  id: string;
}

function randomIdGenerator() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function Page3() {
  const todoTemplate: todoType = {
    title: "",
    body: "",
    id: "",
  };
  const [todos, setTodos] = useState<todoType[]>([]);

  const addTodo = () => {
    setTodos([{ ...todoTemplate, id: randomIdGenerator() }, ...todos]);
  };

  const deleteTodo = (id: "string") =>
    setTodos(todos.filter((todo) => todo.id !== id));

  const editTodo = (index: number, element: string, value: string) => {
    let temp: any = todos;
    temp[index][element] = value;
    setTodos([...temp]);
  };


  return (
    <div>
      <div>Todo List</div>
      <div className="flex gap-x-2">
        <Button onClick={addTodo}>Add</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {todos.map((todo, index) => {
          return (
            <TodoCard
              key={todo.id}
              index={index}
              id={todo.id}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              title={todo.title}
              body={todo.body}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Page3;
