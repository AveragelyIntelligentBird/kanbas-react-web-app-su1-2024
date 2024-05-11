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
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr/>
            <h2 id="wd-dashboard-published">Published Courses (7)</h2>
            <hr/>
            <div id="wd-dashboard-courses">
                <OIAR101 />
                <OIAR111 />
                <OIAR201 />
                <OIAR202 />
                <OIAR211 />
                <OIAR212 />
                <OIAR311 />
            </div>
        </div>
    );
}
