import { deleteAssignment }  from "./reducer";
import {useSelector} from "react-redux";
import { useParams } from "react-router";
import {Link} from "react-router-dom";
import {FaAngleDown, FaBookOpen} from "react-icons/fa6";
import {BsGripVertical} from "react-icons/bs";
import AssignmentsControl from "./AssignmentsControl";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentGroupControlButtons from "./AssignmentGroupControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";

export default function Assignments() {
    const { cid } = useParams();
    const { assignments } = useSelector((state:any) => state.assignmentsReducer);
    const courseAssignments =
        assignments.filter((a : any ) => a.course === cid);
    const dateValToString = (date_string: string) => {
        let date = new Date(date_string)
        return `${date.toLocaleString('default', { month: 'short' })} 
        ${date.getDate()} ${date.getFullYear()}`;
    };
    return (
        <div id="wd-assignments">
            <AssignmentsControl/> <br/><br/><br/>
            <li id="wd-assignments" className="list-group rounded-0">
                <li className="wd-assignments-group list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-assignments-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3"/>
                        <FaAngleDown className="me-2 fs-3"/>
                        <b>ASSIGNMENTS</b>
                        <AssignmentGroupControlButtons/>
                        <div className="float-end px-1 mx-3 border border-1 border-black rounded-4">40% of Total
                        </div>
                    </div>
                    <ul className="wd-assignment-list list-group rounded-0">
                        {courseAssignments.map((assignment: any) => (
                            <li key={`a-${assignment._id}`}
                                className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center"
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
                                    | <b>Not available
                                    until</b> {dateValToString(assignment.available_from)} | <br/>
                                    <b>Due</b> {dateValToString(assignment.due)} | {assignment.points} pts
                                </div>
                                <AssignmentControlButtons assignment={assignment}/>
                            </li>
                        ))}
                    </ul>
                </li>
            </li>
        </div>
    );
}