import { Link, useLocation } from "react-router-dom";
import { TfiDashboard } from "react-icons/tfi";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { GoInbox } from "react-icons/go";
import { VscAccount } from "react-icons/vsc";

export default function KanbasNavigation() {
    const {pathname} = useLocation();
    const links = [
        {label: "Dashboard", path: "/Kanbas/Dashboard", icon: TfiDashboard},
        {label: "Courses", path: "/Kanbas/Dashboard", icon: LiaBookSolid},
        {label: "Calendar", path: "/Kanbas/Calendar", icon: IoCalendarOutline},
        {label: "Inbox", path: "/Kanbas/Inbox", icon: GoInbox},
        {label: "Labs", path: "/Labs", icon: LiaCogSolid},
    ];
    return (
        <div id="wd-kanbas-navigation" className="list-group rounded-0">
            <a id="wd-neu-link" target="_blank"
               href="https://www.northeastern.edu/"
               className="list-group-item bg-black border-0 text-center" rel="noreferrer px-0">
                <img src="/images/NEU.png" width="60px" alt={"NEU Logo"}/> </a>
            <Link key="/Kanbas/Account"
                  to="/Kanbas/Account"
                  className={`list-group-item text-center border-0 px-0
                  ${pathname.includes("Account") ? "bg-white text-danger" : "bg-black text-white"}`}>
                <VscAccount className={`fs-4 ${pathname.includes("Account") ? "text-danger" : "text-white"}`}/>
                <br/>
                Account
            </Link>
            {links.map((link) => (
                <Link key={link.path}
                      to={link.path}
                      className={`list-group-item text-center border-0 small px-0
                      ${pathname.includes(link.label) ? "text-danger bg-white" : "text-white bg-black"}`}>
                    {link.icon({className: "fs-3 text-danger"})}
                    <br/>
                    {link.label}
                </Link>))
            }
        </div>
    );
}
