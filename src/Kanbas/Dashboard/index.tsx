import OIAR101 from "./OIAR101";
import OIAR111 from "./OIAR111";
import OIAR201 from "./OIAR201";
import OIAR202 from "./OIAR202";
import OIAR211 from "./OIAR211";
import OIAR212 from "./OIAR212";
import OIAR311 from "./OIAR311";

export default function Dashboard() {
    return (
        <div>
            <h2 id="wd-dashboard-title">Dashboard</h2>
            <hr/>
            <div id="wd-dashboard-courses" className="row px-4">
                <h4 id="wd-dashboard-published">Published Courses (7)</h4>
                <hr/>
                <div className="row row-cols-1 row-cols-md-5 g-4 my-0">
                    <OIAR101/>
                    <OIAR111/>
                    <OIAR201/>
                    <OIAR202/>
                    <OIAR211/>
                    <OIAR212/>
                    <OIAR311/>
                </div>
            </div>
        </div>
    );
}
