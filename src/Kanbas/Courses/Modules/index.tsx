import { setModules, addModule, editModule, updateModule, deleteModule }
  from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import * as client from "./client";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import ModulesControls from "./ModulesControls";
import {BsGripVertical} from "react-icons/bs";
import "./styles.css"
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";

export default function Modules() {
    const dispatch = useDispatch();
    const { cid } = useParams();
    const [moduleName, setModuleName] = useState("");
    const { modules } = useSelector((state: any) => state.modulesReducer);
    const fetchModules = async () => {
        const fetchModules = await client.findModulesForCourse(cid as string);
        dispatch(setModules(fetchModules));
    };
    useEffect(() => {
        fetchModules();
    }, []);
    const createModule = async (module: any) => {
        const newModule = await client.createModule(cid as string, module);
        dispatch(addModule(newModule));
    };
    const removeModule = async (moduleId: string) => {
        await client.deleteModule(moduleId);
        dispatch(deleteModule(moduleId));
    };
    const saveModule = async (module: any) => {
        const status = await client.updateModule(module);
        dispatch(updateModule(module));
    };
    return (
        <div className="p-4">
            <ModulesControls
                addModule={() => {
                    createModule({ name: moduleName, course: cid });
                    setModuleName("");
                }}
                moduleName={moduleName} setModuleName={setModuleName}/>
            <br/><br/><br/><br/>
            <ul id="wd-modules" className="list-group rounded-0">
                {modules
                    .map((module: any) => (
                        <li key={module.moduleId} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                            <div className="wd-title p-3 ps-2 bg-secondary">
                                <BsGripVertical className="me-2 fs-3"/>
                                {!module.editing && module.name}
                                {module.editing && (
                                    <input
                                        className="form-control w-50 d-inline-block"
                                        onChange={(e) => saveModule(
                                            { ...module, name: e.target.value }) }
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                saveModule({ ...module, editing: false });
                                            }
                                        }}
                                        value={module.name}
                                    />
                                )}
                                <ModuleControlButtons
                                    moduleId={module._id}
                                    deleteModule={(moduleId) => { removeModule(moduleId); }}
                                    editModule={(moduleId) => dispatch(editModule(moduleId))}/>
                            </div>
                            <div className="wd-module-content">
                                {module.lessons && (
                                    <ul className="wd-lessons list-group rounded-0">
                                        {module.lessons.map((lesson: any) => (
                                            <li key={lesson._id} className="wd-lesson list-group-item p-3 ps-1">
                                                <BsGripVertical className="me-2 fs-3"/>
                                                {lesson.name}
                                                <LessonControlButtons/>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

