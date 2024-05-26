import GradesControls from "./GradesControls";
import {useParams} from "react-router";
import * as db from "../../Database";

export default function Grades() {
    const { cid } = useParams();

    const enrolled_s_ids =
        db.enrollments
            .filter((e_record ) => e_record.course === cid)
            .map((e_record) => e_record.user);
    const enrolled_students =
        enrolled_s_ids.map((s_id) =>
            db.users.find((user) => user._id === s_id));

    const assignments =
        db.assignments.filter((a ) => a.course === cid);

    return (
        <div className="p-4">
            <GradesControls/><br/>
            <div className="table-responsive">
                <table className="table table-striped table-bordered">
                    <tbody>
                    <tr>
                        <th className="align-bottom">Student Name</th>
                        {
                            assignments.map((assignment) => (
                                <th className="text-center align-bottom">
                                    {assignment && assignment.title}
                                    <br/>
                                    Out of {assignment && assignment.points}
                                </th>
                            ))
                        }
                    </tr>
                    {
                        enrolled_students.map((student) => (
                            student &&
                            <tr>
                                <td>
                                    <span className="text-danger"> {student.firstName} {student.lastName} </span>
                                </td>
                                {
                                    assignments.map((assignment) => {
                                        let student_grades = db.grades.filter(
                                            (grade) => grade.student === student._id);
                                        let grade = student_grades.find(
                                            (g) => g.assignment === assignment._id);
                                        return (
                                            <td className="text-center">
                                                {grade && grade.grade}
                                            </td>);
                                    })
                                }
                            </tr>
                        ))

                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
