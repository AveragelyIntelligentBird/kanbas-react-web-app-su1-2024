import {Route, Routes} from "react-router";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import {Navigate} from "react-router-dom";

export default function Kanbas() {
    return (
        <div id="wd-kanbas">
            <table border={1} width="100%">
                <tbody>
                <tr>
                    <td valign="top">
                        <KanbasNavigation/>
                    </td>
                    <td valign="top">
                        <Routes>
                            <Route path="/" element={<Navigate to="Dashboard"/>}/>
                            <Route path="/Courses/:id/*" element={<Courses/>}/>
                            <Route path="/Dashboard" element={<Dashboard/>}/>
                        </Routes>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}
