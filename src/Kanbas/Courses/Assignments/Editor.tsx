export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <h2>Assignment Name</h2>
            <input id="wd-name" value="A1 - ENV + HTML"/>
            <br/><br/>
            <textarea id="wd-description" cols={30} rows={10}>
                The assignment is available online
                Submit a link to the landing page of
            </textarea>
            <br/>
            <table>
                <tbody>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100}/>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option value="QUIZZES">QUIZZES</option>
                            <option value="EXAMS">EXAMS</option>
                            <option value="PROJECT">PROJECT</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option selected value="PERCENTAGE">Percentage</option>
                            <option value="POINTS">Points</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <div>
                            <select id="wd-submission-type">
                                <option selected value="ONLINE">Online</option>
                                <option value="OFFLINE">Offline</option>
                            </select>
                            <br/>
                            <label>Online Entry Options</label>
                            <br/>
                            <input type="checkbox" name="check-entry-opt" id="wd-text-entry"/>
                            <label htmlFor="wd-text-entry">Text Entry</label>
                            <br/>
                            <input type="checkbox" name="check-entry-opt" id="wd-website-url"/>
                            <label htmlFor="wd-website-url">Website URL</label>
                            <br/>
                            <input type="checkbox" name="check-entry-opt" id="wd-media-recordings"/>
                            <label htmlFor="wd-media-recordings">Media Recordings</label>
                            <br/>
                            <input type="checkbox" name="check-entry-opt" id="wd-student-annotation"/>
                            <label htmlFor="wd-student-annotation">Student Annotation</label>
                            <br/>
                            <input type="checkbox" name="check-entry-opt" id="wd-file-upload"/>
                            <label htmlFor="wd-file-upload">File Uploads</label>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label>Assign</label>
                    </td>
                    <td>
                        <div>
                            <label htmlFor="wd-assign-to">Assign to</label>
                            <br/>
                            <input id="wd-assign-to" value="Everyone"/>
                            <br/><br/>

                            <label htmlFor="wd-due-date">Due</label>
                            <br/>
                            <input
                                type="date"
                                id="wd-due-date"
                                value="2024-05-13"
                            />
                            <br/><br/>

                            <table>
                                <thead>
                                <tr>
                                    <td>
                                        <label htmlFor="wd-available-from">Available From</label>
                                    </td>
                                    <td>
                                        <label htmlFor="wd-available-until">Until</label>
                                    </td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                        <input
                                            type="date"
                                            id="wd-available-from"
                                            value="2024-05-06"
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="date"
                                            id="wd-available-until"
                                            value="2024-05-20"
                                        />
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </td>
                </tr>
                </tbody>

                <tfoot>
                <tr>
                    <td></td>
                    <td align="right" valign="top">
                        <hr/>
                        <div>
                            <button>Cancel</button>
                            <button>Save</button>
                        </div>
                    </td>
                </tr>
                </tfoot>
            </table>
        </div>
    );
}
