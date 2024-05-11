import LabsTOC from "../Labs/LabsTOC";
import {Navigate, Route, Routes} from "react-router";
import Lab1 from "../Labs/Lab1";
import Lab2 from "../Labs/Lab2";
import Lab3 from "../Labs/Lab3";
import LandingTOC from "./LandingTOC";
import React from "react";
import Labs from "../Labs";
import Kanbas from "../Kanbas";

export default function Landing() {
    return (
        <div>
            <h1>Anfisa Bogdanenko - CS5610 01</h1>
            <a href="https://github.com/AveragelyIntelligentBird/kanbas-react-web-app-su1-2024">
                GitHub
            </a>
            <LandingTOC/>

            <Routes>
                <Route path="/Labs/*" element={<Labs/>}/>
                <Route path="/Kanbas/*" element={<Kanbas/>}/>
            </Routes>
        </div>
    );
}