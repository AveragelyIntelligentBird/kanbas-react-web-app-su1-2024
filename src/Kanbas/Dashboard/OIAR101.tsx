export default function OIAR101() {
    return (
        <div className="wd-dashboard-course col" style={{width: "270px"}}>
            <div className="card">
                <img src="/images/oiar2.jpg"/>
                <div className="card-body">
                    <a
                        className="wd-dashboard-course-link"
                        href="#/Kanbas/Courses/101/Home"
                        style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}
                    >
                        OIAR101 Welcome to OIAR
                    </a>
                    <p className="wd-dashboard-course-title card-text">
                        Onboarding and First Shift
                    </p>
                    <a href="#/Kanbas/Courses/101/Home" className="btn btn-primary"> {" "} Go {" "} </a>
                </div>
            </div>
        </div>
    );
}