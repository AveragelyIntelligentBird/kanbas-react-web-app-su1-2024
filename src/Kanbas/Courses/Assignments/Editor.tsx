import {FaPlus} from "react-icons/fa6";

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor" className="px-4 col-9">
            <div id="wd-higher-edits" className="mb-3 col">
                <br/>
                <label htmlFor="wd-name" className="col-sm-2 col-form-label ">
                    Assignment Name
                </label>
                <div className="col-sm-10">
                    <input
                        type="text"
                        className="form-control"
                        id="wd-name"
                        value="A1"
                    />
                </div>
                <br/>
                <textarea id="wd-description" rows={10} className="col-sm-10 form-control">
                    Sapiente repellendus molestiae possimus mollitia et est dignissimos. Tempore inventore rerum consectetur quod perferendis quos incidunt. Hic voluptatem voluptas voluptatem a. Cupiditate temporibus voluptatem ex optio expedita expedita esse minus. In rerum ipsam molestias dolor nemo odit.
                </textarea>
            </div>
            <br/>
            <div id="wd-lower-edits">
                <div className="mb-3 row">
                    <div className="col-3">
                        <label htmlFor="wd-points" className="col-form-label float-end">
                            Points
                        </label>
                    </div>
                    <div className="col-9">
                        <input
                            type="text"
                            className="form-control"
                            id="wd-points"
                            value={100}/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="col-3">
                        <label htmlFor="wd-group" className="col-form-label float-end">
                            Assignment Group
                        </label>
                    </div>
                    <div className="col-9">
                        <select id="wd-group" className="form-select">
                            <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option value="QUIZZES">QUIZZES</option>
                            <option value="EXAMS">EXAMS</option>
                            <option value="PROJECT">PROJECT</option>
                        </select>
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="col-3">
                        <label htmlFor="wd-display-grade-as" className="col-form-label float-end">
                            Display Grade as
                        </label>
                    </div>
                    <div className="col-9">
                        <select id="wd-display-grade-as" className="form-select">
                            <option selected value="PERCENTAGE">Percentage</option>
                            <option value="POINTS">Points</option>
                        </select>
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="col-3">
                        <label htmlFor="wd-submission-type" className="col-form-label float-end">
                            Submission Type
                        </label>
                    </div>
                    <div className="col-9 border border-gray border-1 rounded-1 py-3">
                        <div>
                            <select id="wd-submission-type" className="form-select">
                                <option selected value="ONLINE">Online</option>
                                <option value="OFFLINE">Offline</option>
                            </select>
                        </div>
                        <label htmlFor="wd-submission-type" className="col-form-label">
                            Online Entry Options
                        </label>
                        <br/>
                        <input className="form-check-input" type="checkbox" name="check-entry-opt" id="wd-text-entry"/>
                        <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
                        <br/>
                        <input className="form-check-input" type="checkbox" name="check-entry-opt" id="wd-website-url"/>
                        <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
                        <br/>
                        <input className="form-check-input" type="checkbox" name="check-entry-opt"
                               id="wd-media-recordings"/>
                        <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
                        <br/>
                        <input className="form-check-input" type="checkbox" name="check-entry-opt"
                               id="wd-student-annotation"/>
                        <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
                        <br/>
                        <input className="form-check-input" type="checkbox" name="check-entry-opt" id="wd-file-upload"/>
                        <label className="form-check-label" htmlFor="wd-file-upload">File Uploads</label>
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="col-3">
                        <label className="col-form-label float-end">
                            Assign
                        </label>
                    </div>
                    <div className="col-9 border border-gray border-1 rounded-1 py-3">
                        <label htmlFor="wd-assign-to" className="col-form-label">
                            Assign to
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="wd-assign-to"
                            value="Everyone X"/>
                        <br/>
                        <label htmlFor="wd-due-date" className="col-form-label">
                            Due
                        </label>
                        <br/>
                        <input
                            className="form-select"
                            type="date"
                            id="wd-due-date"
                            value="2024-05-13"/>
                        <br/>
                        <div className="d-flex row">
                            <div className="col-6">
                                <label htmlFor="wd-available-from" className="col-form-label">
                                    Available From
                                </label>
                                <br/>
                                <input
                                    className="form-select"
                                    type="date"
                                    id="wd-available-from"
                                    value="2024-05-06"/>
                                <br/>
                            </div>
                            <div className="col-6">
                                <label htmlFor="wd-available-until" className="col-form-label">
                                    Until
                                </label>
                                <br/>
                                <input
                                    className="form-select"
                                    type="date"
                                    id="wd-available-until"
                                    value="2024-05-06"/>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="text-nowrap">
                <button className="btn btn-md btn-danger me-1 float-end">
                    Save
                </button>
                <button className="btn btn-md btn-secondary me-1 float-end">
                    Cancel
                </button>
            </div>
            <br/><br/>
        </div>
    );
}
