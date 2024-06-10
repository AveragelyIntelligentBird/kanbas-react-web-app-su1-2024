import {useState} from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`
const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`

export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });
    const [module, setModule] = useState({
        id: 1, name: "NodeJS Module",
        description: "Learning how to create a NodeJS server with ExpressJS",
        course: "WebDev"
    });
    return (
        <div id="wd-working-with-objects">
            <h3>Working With Objects</h3>
            <div id="wd-retrieving-objects">
                <h4>Retrieving Objects</h4>
                <a id="wd-retrieve-assignments" className="btn btn-primary"
                   href={`${REMOTE_SERVER}/lab5/assignment`}>
                    Get Assignment
                </a>
                <a id="wd-retrieve-assignments" className="btn btn-primary"
                   href={`${REMOTE_SERVER}/lab5/module`}>
                    Get Module
                </a>
            </div>
            <hr/>
            <div id="wd-modifying-objects">
                <h4>Retrieving Properties</h4>
                <a id="wd-retrieve-assignment-title" className="btn btn-primary"
                   href={`${REMOTE_SERVER}/lab5/assignment/title`}>
                    Get Assignment Title
                </a>
                <a id="wd-retrieve-assignment-title" className="btn btn-primary"
                   href={`${REMOTE_SERVER}/lab5/module/name`}>
                    Get Module Name
                </a>
            </div>
            <hr/>
            <div id="wd-modifying-objects">
                <h4>Modifying Properties</h4>
                <div className="d-flex">
                    <div className="col-6">
                        <a id="wd-update-assignment-title"
                           className="btn btn-primary float-end"
                           href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
                            Update Assignment Title
                        </a>
                        <input className="form-control w-50" title="Assignment Title" id="wd-assignment-title"
                               value={assignment.title} onChange={(e) =>
                            setAssignment({...assignment, title: e.target.value})}/>
                        <a id="wd-update-assignment-title"
                           className="btn btn-primary float-end"
                           href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
                            Update Assignment Score
                        </a>
                        <input className="form-control w-50" title="Assignment Score" id="wd-assignment-score"
                               value={assignment.score} onChange={(e) =>
                            setAssignment({...assignment, score: parseInt(e.target.value)})}/>
                        <a id="wd-update-assignment-score"
                           className="btn btn-primary float-end"
                           href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
                            Update Assignment Completed Status
                        </a>
                        <div className="form-check w-507">
                            <input className="form-check-input" type="checkbox" id="wd-assignment-completed"
                                   checked={assignment.completed} onChange={(e) =>
                                setAssignment({...assignment, completed: !assignment.completed})}
                            />
                            <label className="form-check-label" htmlFor="wd-assignment-completed">
                                Assignment Completed{" "}
                            </label>{" "}
                        </div>
                    </div>
                    <div className="flex-fill">
                        <a id="wd-update-module-name"
                           className="btn btn-primary float-end"
                           href={`${MODULE_API_URL}/name/${module.name}`}>
                            Update Module Name
                        </a>
                        <input className="form-control w-50" title="Module Name" id="wd-module-name"
                               value={module.name} onChange={(e) =>
                            setModule({...module, name: e.target.value})}/>
                        <a id="wd-update-module-description"
                           className="btn btn-primary float-end"
                           href={`${MODULE_API_URL}/description/${module.description}`}>
                            Update Module Description
                        </a>
                        <input className="form-control w-50" title="Module Description" id="wd-module-descrition"
                               value={module.description} onChange={(e) =>
                            setModule({...module, description: e.target.value})}/>
                    </div>
                </div>
            </div>
        </div>
    );
};
