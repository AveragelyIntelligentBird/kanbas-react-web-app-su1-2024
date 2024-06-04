import {Link} from "react-router-dom";
import {FaBookOpen, FaPencil, FaTrashCan} from "react-icons/fa6";

export default function Dashboard({courses, course, setCourse, addNewCourse, deleteCourse, updateCourse}: {
    courses: any[];
    course: any;
    setCourse: (course: any) => void;
    addNewCourse: () => void;
    deleteCourse: (courseId: string) => void;
    updateCourse: () => void;
}) {
    return (
        <div id="wd-dashboard" className="px-5">
            <h1 id="wd-dashboard-title"><b>Dashboard</b></h1>
            <hr/>
            <h5 id="wd-new-course-controls">
                New Course
                <button
                    className="btn btn-primary float-end"
                    id="wd-add-new-course-click"
                    onClick={addNewCourse}
                >
                    {" "}
                    Add{" "}
                </button>
                <button
                    className="btn btn-warning float-end me-2"
                    onClick={updateCourse}
                    id="wd-update-course-click"
                >
                    Update
                </button>
            </h5>
            <br/>
            <input id="wd-new-course-name"
                   value={course.name}
                   className="form-control mb-2"
                   onChange={(e) =>
                       setCourse({...course, name: e.target.value})}
            />
            <textarea id="wd-new-course-description"
                      value={course.description}
                      className="form-control"
                      onChange={(e) =>
                          setCourse({...course, description: e.target.value})}
            />
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
                                    <button
                                        onClick={(event) => {
                                            event.preventDefault();
                                            deleteCourse(course._id);
                                        }}
                                        className="btn text-danger float-end fs-5 p-1"
                                        id="wd-delete-course-click"
                                    >
                                        <FaTrashCan />
                                    </button>
                                    <button
                                        id="wd-edit-course-click"
                                        onClick={(event) => {
                                            event.preventDefault();
                                            setCourse(course);
                                        }}
                                        className="btn text-warning me-2 float-end fs-5 p-1"
                                    >
                                        <FaPencil/>
                                    </button>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
        ;
};
