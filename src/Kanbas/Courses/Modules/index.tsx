export default function Modules() {
    return (
        <div>
            <button id="wd-collapse-all-btn" type="button">
                Collapse All
            </button>
            <button id="wd-view-progress-btn" type="button">
                View Progress
            </button>
            <select id="wd-select-publish-opt">
                <option selected value="ALL">Publish All</option>
                <option value="ONE">Publish One</option>
            </select>
            <button id="wd-add-module-btn" type="button">
                + Module
            </button>

            <ul id="wd-modules">
                <li className="wd-module">
                    <div className="wd-title">Welcome to OIAR!</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">NAVIGATION</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">
                                    Current Employee Directory
                                </li>
                                <li className="wd-content-item">
                                    Office Layout
                                </li>
                                <li className="wd-content-item">
                                    Office Policies
                                </li>
                                <li className="wd-content-item">
                                    Off-limits Office Areas
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">RESOURCES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">
                                    Adjusting to Night Shifts
                                </li>
                                <li className="wd-content-item">
                                    Contacts of Former Employees
                                </li>
                                <li className="wd-content-item">
                                    List of Affiliated Therapists
                                </li>
                                <li className="wd-content-item">
                                    Employee-Selected After-Work Pubs
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="wd-module">
                    <div className="wd-title">Job Summary</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">FR3-d1 AND DPHW</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">
                                    Incident Classification Format
                                </li>
                                <li className="wd-content-item">
                                    Classification Cross-Referencing
                                </li>
                                <li className="wd-content-item">
                                    Further Information Location
                                </li>
                                <li className="wd-content-item">
                                    Ignore the Text To Speech
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">POLICIES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">
                                    Policies and Punishments
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}
