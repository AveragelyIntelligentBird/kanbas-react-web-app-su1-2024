import { Link } from "react-router-dom";
import * as db from "../Database";
import {FaBookOpen} from "react-icons/fa6";

export default function Dashboard() {
    const courses = db.courses;
    return (
        <div id="wd-dashboard" className="px-5">
            <h1 id="wd-dashboard-title"><b>Dashboard</b></h1>
            <hr/>
            <h3 id="wd-dashboard-published" className="mb-0">Published Courses ({courses.length})</h3>
            <hr className="mb-0"/>
            <div id="wd-dashboard-courses" className="row row-cols-1 row-cols-md-5 g-4 my-0">
                {courses.map((course) => (
                    <div className="wd-dashboard-course col" style={{width: "290px"}}>
                        <Link to={`/Kanbas/Courses/${course._id}/Home`} className="text-decoration-none">
                            <div className="card rounded-3 overflow-hidden">
                                <img src={course.image} height="160px" alt="Course Image"/>
                                <div className="card-body">
                                    <p className="wd-dashboard-course-link text-decoration-none text-truncate my-1 fs-6"
                                       style={{
                                           color: "navy", fontWeight: "bold",
                                           overflow: "hidden"
                                       }}>
                                        {course.number} {course.name}
                                    </p>
                                    <p className="wd-dashboard-course-title card-text text-truncate my-0 fs-7"
                                       style={{overflow: "hidden"}}>
                                        {course.number}.{course._id}
                                    </p>
                                    <p className="wd-dashboard-course-title card-text text-truncate my-0 fs-7"
                                       style={{overflow: "hidden"}}>
                                        {course.description}
                                    </p>
                                    <Link to={`/Kanbas/Courses/${course._id}/Assignments`}
                                              className="text-decoration-none fs-5 p-1"
                                              style={{color: "navy"}}>
                                            <FaBookOpen/>
                                    </Link>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>

        // <div>
        //     <h2 id="wd-dashboard-title">Dashboard</h2>
        //     <hr/>
        //     <div id="wd-dashboard-courses" className="row px-4">
        //         <h4 id="wd-dashboard-published">Published Courses (7)</h4>
        //         <hr/>
        //         <div className="row row-cols-1 row-cols-md-5 g-4 my-0">
        //             <OIAR101/>
        //             <OIAR111/>
        //             <OIAR201/>
        //             <OIAR202/>
        //             <OIAR211/>
        //             <OIAR212/>
        //             <OIAR311/>
        //         </div>
        //     </div>
        // </div>
    );
}
