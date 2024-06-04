import { Navigate, Route, Routes } from "react-router";
import store from "./store";
import { Provider } from "react-redux";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Lab4 from "./Lab4";
import TOC from "./TOC";

export default function Labs() {
    return (
        <Provider store={store}>
            <div>
                <h1>Anfisa Bogdanenko - CS5610 01</h1>
                <TOC/>
                <br/>
                <Routes>
                    <Route path="/" element={<Navigate to="Lab1"/>}/>
                    <Route path="/Lab1" element={<Lab1/>}/>
                    <Route path="/Lab2" element={<Lab2/>}/>
                    <Route path="/Lab3/*" element={<Lab3/>}/>
                    <Route path="/Lab4/*" element={<Lab4/>}/>
                </Routes>
                <a href="https://github.com/AveragelyIntelligentBird/kanbas-react-web-app-su1-2024">
                    GitHub
                </a>
            </div>
        </Provider>
    );
}
