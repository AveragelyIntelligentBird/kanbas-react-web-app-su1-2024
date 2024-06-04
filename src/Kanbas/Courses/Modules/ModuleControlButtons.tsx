import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import {FaPencil, FaPlus, FaTrashCan} from "react-icons/fa6";
export default function ModuleControlButtons(
    {deleteModule, editModule, moduleId}:
    {deleteModule: (moduleId: string) => void; editModule : (moduleId : string) => void; moduleId: string;}
) {
    return (
        <div className="float-end">
            <FaPencil onClick={() => editModule(moduleId)} className="text-primary me-3" />
            <FaTrashCan className="text-danger me-3 mb-1" onClick={() => deleteModule(moduleId)}/>
            <GreenCheckmark />
            <FaPlus className="position-relative ms-2 me-3" style={{bottom: "1px"}}/>
            <IoEllipsisVertical className="fs-4"/>
        </div>
    );
}
