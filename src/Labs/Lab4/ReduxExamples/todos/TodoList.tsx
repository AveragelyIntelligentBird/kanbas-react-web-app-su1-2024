import React from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { useSelector } from "react-redux";

export default function TodoList() {
    const {todos} = useSelector((state: any) => state.todosReducer);
    return (
        <div>
            <h2>Todo List</h2>
            <ul className="list-group col-6">
                <TodoForm/>
                {todos.map((todo: any) => (
                    <TodoItem todo={todo}/>
                ))}
            </ul>
            <hr/>
        </div>
    );
};
