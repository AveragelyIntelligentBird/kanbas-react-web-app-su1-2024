import { deleteTodo, setTodo } from "./todosReducer";
import { useDispatch } from "react-redux";

export default function TodoItem({todo} : {
    todo: { id: string; title: string };
}) {
    const dispatch = useDispatch();
    return (
        <li key={todo.id} className="list-group-item">
            <button
                onClick={() => dispatch(deleteTodo(todo.id))}
                id="wd-delete-todo-click"
                className="float-end btn bg-danger text-white"
            >
                {" "}Delete{" "}
            </button>
            <button onClick={() => dispatch(setTodo(todo))}
                    id="wd-set-todo-click"
                    className="float-end btn btn-primary me-2"
            >
                {" "}Edit{" "}
            </button>
            {todo.title}
        </li>
    );
};
