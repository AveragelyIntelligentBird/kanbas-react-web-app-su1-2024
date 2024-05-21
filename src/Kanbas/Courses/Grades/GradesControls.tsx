
import {FaAngleDown, FaCog} from "react-icons/fa";
import {CiExport, CiFilter, CiImport} from "react-icons/ci";

export default function GradesControls() {
    return (
        <div id="wd-grades-controls" className="text-nowrap">
            <div id="wd-grade-buttons">
                <button id="wd-settings-btn" className="btn btn-md btn-secondary me-1 float-end">
                    <FaCog className="position-relative" style={{bottom: "1px"}}/>
                </button>
                <button id="wd-export-btn" className="btn btn-md btn-secondary me-1 float-end">
                    <CiExport className="position-relative me-2" style={{bottom: "1px"}}/>
                    Export
                    <FaAngleDown className="position-relative mt-2 ms-1 float-end" style={{bottom: "1px"}}/>
                </button>
                <button id="wd-import-btn" className="btn btn-md btn-secondary me-1 float-end">
                    <CiImport className="position-relative me-2" style={{bottom: "1px"}}/>
                    Import
                </button>
            </div>
            <br/><br/>
            <div id="wd-grade-search" className="d-flex row">
                <div className="form col-6">
                    <label className="col-form-label bold">Student Names</label>
                    <input type="text" className="form-control float-start form-input"
                           placeholder="🔎︎ Search Students"/>
                </div>
                <div className="form col-6">
                    <label className="col-form-label bold">Assignment Names</label>
                    <input type="text" className="form-control float-start form-input"
                           placeholder="🔎︎ Search Assignments"/>
                </div>
            </div>
            <button id="wd-grade-filter-btn" className="btn btn-md btn-secondary me-1 mt-2">
                <CiFilter className="position-relative me-2" style={{bottom: "1px"}}/>
                Apply Filters
            </button>
        </div>
    );
}
