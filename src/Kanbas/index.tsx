import { Navigate, Route, Routes } from "react-router";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import "./styles.css";
import { useState } from "react";
import * as db from "./Database";
import store from "./store";
import { Provider } from "react-redux";

export default function Kanbas() {
    const [courses, setCourses] = useState(db.courses);
    const [course, setCourse] = useState<any>({
        _id: "0",
        name: "New Course",
        number: "XXXX",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
        image: "/images/reactjs.jpg",
        description: "New Description",
    });
    const addNewCourse = () => {
        const newCourse = {...course,
            _id: new Date().getTime().toString(),
            image: "/images/reactjs.jpg",
            number: "XXXX"};
        setCourses([{...course, ...newCourse}, ...courses]);
    };
    const deleteCourse = (courseId: string) => {
        setCourses(courses.filter((course) => course._id !== courseId));
    };
    const updateCourse = () => {
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
    };
    return (
        <Provider store={store}>
            <div id="wd-kanbas" className="h-100">
                <div className="d-flex h-100">
                    <div className="bg-black d-none d-md-block h-100">
                        <KanbasNavigation/>
                    </div>
                    <div className="flex-fill p-4 h-100">
                        <Routes>
                            <Route path="/" element={<Navigate to="Dashboard"/>}/>
                            <Route path="Account" element={<h1>Account</h1>}/>
                            <Route
                                path="Dashboard"
                                element={
                                    <Dashboard
                                        courses={courses}
                                        course={course}
                                        setCourse={setCourse}
                                        addNewCourse={addNewCourse}
                                        deleteCourse={deleteCourse}
                                        updateCourse={updateCourse}
                                    />
                                }
                            />
                            <Route
                                path="Courses/:cid/*"
                                element={<Courses courses={courses}/>}
                            />
                            <Route path="Calendar" element={<h1>Calendar</h1>}/>
                            <Route path="Inbox" element={<h1>Inbox</h1>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </Provider>
    );
};