import {Navigate, Route, Routes} from "react-router";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import TOC from "./TOC";

export default function Labs() {
    return (
        <div>
            <h1>Anfisa Bogdanenko - CS5610 01</h1>
            <a href="https://github.com/AveragelyIntelligentBird/kanbas-react-web-app-su1-2024">
                GitHub
            </a>

            <TOC/>
            <Routes>
                <Route path="/" element={<Navigate to="Lab1"/>}/>
                <Route path="/Lab1" element={<Lab1/>}/>
                <Route path="/Lab2" element={<Lab2/>}/>
                <Route path="/Lab3" element={<Lab3/>}/>
            </Routes>
        </div>
    );
}
