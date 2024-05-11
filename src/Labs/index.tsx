import {Navigate, Route, Routes} from "react-router";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import LabsTOC from "./LabsTOC";
import React from "react";

export default function Labs() {
    return (
        <div>
            <a href="">
                Back to Landing
            </a>
            <LabsTOC/>
            <Routes>
                <Route path="/" element={<Navigate to="Lab1"/>}/>
                <Route path="/Lab1" element={<Lab1/>}/>
                <Route path="/Lab2" element={<Lab2/>}/>
                <Route path="/Lab3" element={<Lab3/>}/>
            </Routes>
        </div>
    );
}
