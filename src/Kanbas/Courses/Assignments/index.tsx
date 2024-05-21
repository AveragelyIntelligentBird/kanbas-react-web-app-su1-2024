import AssignmentsControl from "./AssignmentsControl";
import {BsGripVertical} from "react-icons/bs";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import {FaBookOpen} from "react-icons/fa6";
import {FaAngleDown} from "react-icons/fa";

export default function Assignments() {
    return (
        <div id="wd-assignments">
            <AssignmentsControl/> <br/><br/><br/>
            <li id="wd-assignments" className="list-group rounded-0">
                <li className="wd-assignments-group list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-assignments-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3"/>
                        <FaAngleDown className="me-2 fs-3"/>
                        <b>ASSIGNMENTS</b>
                        <ModuleControlButtons/>
                        <div className="float-end px-1 mx-3 border border-1 border-black rounded-4">40% of Total</div>
                    </div>
                    <ul className="wd-assignment-list list-group rounded-0">
                        <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center"
                            style={{borderLeft: "4px solid green"}}>
                            <BsGripVertical className="me-2 fs-3"/>
                            <FaBookOpen className="me-2 fs-3 text-success"/>
                            <div className="flex-grow-1 px-3">
                                <a className="wd-assignment-link fw-bold"
                                   style={{textDecoration: "none", color: "navy", fontWeight: "bold"}}
                                   href="#/Kanbas/Courses/101/Assignments/a1">
                                    A1
                                </a>
                                <br/>
                                <span className="text-danger">Multiple Modules </span>
                                | <b>Not available until</b> May 6 at 12:00am | <br/>
                                <b>Due</b> May 13 at 11:59pm | 100 pts
                            </div>
                            <LessonControlButtons/>
                        </li>
                        <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center"
                            style={{borderLeft: "4px solid green"}}>
                            <BsGripVertical className="me-2 fs-3"/>
                            <FaBookOpen className="me-2 fs-3 text-success"/>
                            <div className="flex-grow-1 px-3">
                                <a className="wd-assignment-link fw-bold"
                                   style={{textDecoration: "none", color: "navy", fontWeight: "bold"}}
                                   href="#/Kanbas/Courses/101/Assignments/a2">
                                    A2
                                </a>
                                <br/>
                                <span className="text-danger">Multiple Modules </span>
                                | <b>Not available until</b> May 13 at 12:00am | <br/>
                                <b>Due</b> May 20 at 11:59pm | 100 pts
                            </div>
                            <LessonControlButtons/>
                        </li>
                        <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center"
                            style={{borderLeft: "4px solid green"}}>
                            <BsGripVertical className="me-2 fs-3"/>
                            <FaBookOpen className="me-2 fs-3 text-success"/>
                            <div className="flex-grow-1 px-3">
                                <a className="wd-assignment-link fw-bold"
                                   style={{textDecoration: "none", color: "navy", fontWeight: "bold"}}
                                   href="#/Kanbas/Courses/101/Assignments/a1">
                                    A3
                                </a>
                                <br/>
                                <span className="text-danger">Multiple Modules </span>
                                | <b>Not available until</b> May 20 at 12:00am | <br/>
                                <b>Due</b> May 27 at 11:59pm | 100 pts
                            </div>
                            <LessonControlButtons/>
                        </li>
                    </ul>
                </li>
            </li>
        </div>
    );
}