import { addTodo, updateTodo, setTodo } from "./todosReducer";
import { useDispatch, useSelector } from "react-redux";

export default function TodoForm() {
    const dispatch = useDispatch();
    const {todo} = useSelector((state: any) => state.todosReducer);
    return (
        <li className="list-group-item">
            <button onClick={() => dispatch(addTodo(todo))}
                    id="wd-add-todo-click"
                    className="float-end btn bg-success text-white"
            >
                {" "}Add{" "}
            </button>
            <button
                onClick={() => dispatch(updateTodo(todo))}
                id="wd-update-todo-click"
                className="float-end btn bg-warning me-2"
            >
                {" "}Update{" "}
            </button>
            <div className="col-8">
                <input
                    value={todo.title}
                    className="form-control col-form-label"
                    onChange={(e) =>
                        dispatch(setTodo({...todo, title: e.target.value}))}
                />
            </div>
        </li>
    );
};
