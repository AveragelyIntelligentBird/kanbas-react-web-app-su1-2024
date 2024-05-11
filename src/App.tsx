import React from "react";
import Labs from "./Labs";
import {HashRouter, Routes, Route, Navigate} from "react-router-dom";
import Kanbas from "./Kanbas";
import Courses from "./Kanbas/Courses";
import Landing from "./Landing";

function App() {
    return (
        <HashRouter>
            <div>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/Labs/*" element={<Labs/>}/>
                    <Route path="/Kanbas/*" element={<Kanbas/>}/>
                </Routes>
            </div>
        </HashRouter>
    );
}

export default App;
