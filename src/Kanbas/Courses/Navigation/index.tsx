import {useLocation} from "react-router";
import "./index.css"

export default function CoursesNavigation() {
    const location = useLocation();
    return (
        <div id="wd-courses-navigation" className="list-group  rounded-0">
            <a
                id="wd-course-home-link"
                href="#/Kanbas/Courses/101/Home"
                className={`list-group-item border border-0 ${
                       location.pathname.includes("Home") ? "active" : "text-danger"
                   }`}
            >
                Home
            </a>
            <a
                id="wd-course-modules-link"
                href="#/Kanbas/Courses/101/Modules"
                className={`list-group-item border border-0 ${
                       location.pathname.includes("Modules") ? "active" : "text-danger"
                   }`}
            >
                Modules
            </a>
            <a
                id="wd-course-piazza-link"
                href="#/Kanbas/Courses/101/Piazza"
                className={`list-group-item border border-0 ${
                       location.pathname.includes("Piazza") ? "active" : "text-danger"
                   }`}
            >
                Piazza
            </a>
            <a
                id="wd-course-zoom-link"
                href="#/Kanbas/Courses/101/Zoom"
                className={`list-group-item border border-0 ${
                       location.pathname.includes("Zoom") ? "active" : "text-danger"
                   }`}
            >
                Zoom
            </a>
            <a
                id="wd-course-quizzes-link"
                href="#/Kanbas/Courses/101/Assignments"
                className={`list-group-item border border-0 ${
                       location.pathname.includes("Assignments") ? "active" : "text-danger"
                   }`}
            >
                Assignments
            </a>
            <a
                id="wd-course-assignments-link"
                href="#/Kanbas/Courses/101/Quizzes"
                className={`list-group-item border border-0 ${
                       location.pathname.includes("Quizzes") ? "active" : "text-danger"
                   }`}
            >
                Quizzes
            </a>
            <a
                id="wd-course-grades-link"
                href="#/Kanbas/Courses/101/Grades"
                className={`list-group-item border border-0 ${
                       location.pathname.includes("Grades") ? "active" : "text-danger"
                   }`}
            >
                Grades
            </a>
        </div>
    );
}
