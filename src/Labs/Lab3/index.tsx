import { useSelector } from "react-redux";
import AddingAndRemovingToFromArrays from "./AddingAndRemovingToFromArrays";
import ArrowFunctions from "./ArrowFunctions";
import BooleanVariables from "./BooleanVariables";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import House from "./House";
import IfElse from "./IfElse";
import ImpliedReturn from "./ImpliedReturn";
import JsonStringify from "./JsonStringify";
import LegacyFunctions from "./LegacyFunctions";
import MapFunction from "./MapFunction";
import SimpleArrays from "./SimpleArrays";
import TernaryOperator from "./TernaryOperator";
import Spreading from "./Spreading";
import TodoList from "./todos/TodoList";
import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import ConditionalOutputInline from "./ConditionalOutputInline";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import ForLoops from "./ForLoops";
import FindFunction from "./FindFunction";
import FindIndex from "./FindIndex";
import FilterFunction from "./FilterFunction";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";
import DestructingImports from "./DestructingImports";
import Classes from "./Classes";
import Styles from "./Styles";
import Add from "./Add";
import Square from "./Square"
import Highlight from "./Highlight";
import PathParameters from "./PathParameters";

export default function Lab3() {
    const { todos } = useSelector((state: any) => state.todosReducer);
    console.log("Haiiii <3");
    return (
        <div id="wd-lab3" className="container-fluid">
            <h3>Lab 3</h3>
            <ul className="list-group">
                {todos.map((todo: any) => (
                    <li className="list-group-item" key={todo.id}>
                        {todo.title}
                    </li>
                ))}
            </ul>
            <hr/>
            <VariablesAndConstants/>
            <VariableTypes/>
            <BooleanVariables/>
            <IfElse/>
            <TernaryOperator/>
            <ConditionalOutputIfElse/>
            <ConditionalOutputInline/>
            <LegacyFunctions/>
            <ArrowFunctions/>
            <ImpliedReturn/>
            <SimpleArrays/>
            <ArrayIndexAndLength/>
            <AddingAndRemovingToFromArrays/>
            <ForLoops/>
            <MapFunction/>
            <FindFunction/>
            <FindIndex/>
            <FilterFunction/>
            <JsonStringify/>
            <House/>
            <TodoList/>
            <Spreading/>
            <Destructing/>
            <FunctionDestructing/>
            <DestructingImports/>
            <Classes/>
            <Styles/>

            <Add a={3} b={4}/>
            <h4>Square of 4</h4>
            <Square>4</Square>
            <hr/>

            <h4>Highlight</h4>
            <Highlight>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum,
                saepe
                totam vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores,
                provident
                voluptates.
            </Highlight>
            <hr/>

            <PathParameters/>
        </div>
    );
};
