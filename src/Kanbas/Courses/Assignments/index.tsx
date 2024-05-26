import { useParams } from "react-router";
import * as db from "../../Database";
import AssignmentsControl from "./AssignmentsControl";
import {BsGripVertical} from "react-icons/bs";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import {FaBookOpen} from "react-icons/fa6";
import {FaAngleDown} from "react-icons/fa";
import {Link} from "react-router-dom";

export default function Assignments() {
    const { cid } = useParams();
    const assignments =
        db.assignments.filter((a ) => a.course === cid);
    return (
        <div id="wd-assignments">
            <AssignmentsControl/> <br/><br/><br/>
            {
                <li id="wd-assignments" className="list-group rounded-0">
                    <li className="wd-assignments-group list-group-item p-0 mb-5 fs-5 border-gray">
                        <div className="wd-assignments-title p-3 ps-2 bg-secondary">
                            <BsGripVertical className="me-2 fs-3"/>
                            <FaAngleDown className="me-2 fs-3"/>
                            <b>ASSIGNMENTS</b>
                            <ModuleControlButtons/>
                            <div className="float-end px-1 mx-3 border border-1 border-black rounded-4">40% of Total
                            </div>
                        </div>
                        <ul className="wd-assignment-list list-group rounded-0">
                            {
                                assignments.map((assignment) => (
                                    <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center"
                                        style={{borderLeft: "4px solid green"}}>
                                        <BsGripVertical className="me-2 fs-3"/>
                                        <FaBookOpen className="me-2 fs-3 text-success"/>
                                        <div className="flex-grow-1 px-3">
                                            <Link
                                                className="wd-assignment-link fw-bold"
                                                style={{textDecoration: "none", color: "navy", fontWeight: "bold"}}
                                                key={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                                                to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                                                {assignment.title}
                                            </Link>
                                            <br/>
                                            <span className="text-danger">Multiple Modules </span>
                                            | <b>Not available until</b> {new Date(assignment.available).toDateString()} | <br/>
                                            <b>Due</b> {new Date(assignment.due).toDateString()} | {assignment.points} pts
                                        </div>
                                        <LessonControlButtons/>
                                    </li>
                                ))
                            }
                        </ul>
                    </li>
                </li>
            }
        </div>
    );
}