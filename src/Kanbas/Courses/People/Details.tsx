import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FaPencil } from "react-icons/fa6";
import { FaCheck, FaUserCircle } from "react-icons/fa";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import * as client from "./client";

export default function PeopleDetails({fetchUsers}: { fetchUsers: () => void; }) {
    const navigate = useNavigate();
    const {uid, cid} = useParams();
    const [user, setUser] = useState<any>({});
    const [name, setName] = useState("");
    const [editing, setEditing] = useState(false);
    const saveUser = async () => {
        const [firstName, lastName] = name.split(" ");
        const updatedUser = {...user, firstName, lastName};
        await client.updateUser(updatedUser);
        setUser(updatedUser);
        setEditing(false);
        fetchUsers();
        navigate(`/Kanbas/Courses/${cid}/People`);
    };
    const deleteUser = async (uid: string) => {
        await client.deleteUser(uid);
        fetchUsers();
        navigate(`/Kanbas/Courses/${cid}/People`);
    };
    const fetchUser = async () => {
        if (!uid) return;
        const user = await client.findUserById(uid);
        setUser(user);
    };
    useEffect(() => {
        if (uid) fetchUser();
    }, [uid]);

    if (!uid) return null;
    return (
        <div className="position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25">
            <Link to={`/Kanbas/Courses/${cid}/People`} className="btn position-fixed end-0 top-0">
                <IoCloseSharp className="fs-1"/> </Link>
            <div className="text-center mt-2"><FaUserCircle className="text-secondary me-2 fs-1"/></div>
            <hr/>
            <div className="text-danger fs-4">
                {!editing && (
                    <FaPencil onClick={() => setEditing(true)}
                              className="float-end fs-5 mt-2"/>)}
                {editing && (
                    <FaCheck onClick={() => saveUser()}
                             className="float-end fs-5 mt-2 me-2"/>)}
                {!editing && (
                    <div onClick={() => setEditing(true)}>
                        {user.firstName} {user.lastName}</div>)}
                {user && editing && (
                    <input className="form-control w-50"
                           defaultValue={`${user.firstName} ${user.lastName}`}
                           onChange={(e) => setName(e.target.value)}
                           onKeyDown={(e) => {
                               if (e.key === "Enter") {
                                   saveUser();
                               }
                           }}
                    />
                )}
            </div>
            <b>Roles:</b>
            <div>
                {!editing && user.role}
                {editing && (
                    <select className="form-select w-50"
                            defaultValue={user.role}
                            onChange={(e) =>
                                setUser({...user, role: e.target.value})}
                    >
                        <option value="STUDENT">Student</option>
                        <option value="TA">TA</option>
                        <option value="FACULTY">Faculty</option>
                    </select>
                )}
            </div>
            <b>Email:</b>
            <div>
                {!editing && user.email}
                {editing && (
                    <input className="form-control w-50"
                           type="email"
                           defaultValue={user.email}
                           onChange={(e) =>
                               setUser({...user, email: e.target.value})}
                    />
                )}
            </div>
            <br/>
            <b>Section:</b> {user.section} <br/>
            <b>Login ID:</b> {user.loginId} <br/>
            <b>Total Activity:</b> {user.totalActivity}
            <hr/>
            <button onClick={() => deleteUser(uid)} className="btn btn-danger float-end"> Delete</button>
            <button onClick={() => navigate(`/Kanbas/Courses/${cid}/People`)}
                    className="btn btn-secondary float-start float-end me-2"> Cancel
            </button>
        </div>
    )
};