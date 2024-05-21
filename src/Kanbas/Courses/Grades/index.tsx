import GradesControls from "./GradesControls";

export default function Grades() {
    return (
        <div className="p-4">
            <GradesControls/><br/>
            <div className="table-responsive">
                <table className="table table-striped table-bordered">
                    <tbody>
                    <tr>
                        <th className="align-bottom">Student Name</th>
                        <th className="text-center">A1<br/>Out of 100</th>
                        <th className="text-center">A2<br/>Out of 100</th>
                        <th className="text-center">A3<br/>Out of 100</th>
                        <th className="text-center">A4<br/>Out of 100</th>
                    </tr>
                    <tr>
                        <td>
                            <span className="text-danger">Alice Dyer</span>
                        </td>
                        <td className="text-center">77%</td>
                        <td className="text-center">89%</td>
                        <td className="text-center">90%</td>
                        <td className="text-center">79%</td>
                    </tr>
                    <tr>
                        <td>
                            <span className="text-danger">Samama Khalid</span>
                        </td>
                        <td className="text-center">100%</td>
                        <td className="text-center">92%</td>
                        <td className="text-center">94%</td>
                        <td className="text-center">96%</td>
                    </tr>
                    <tr>
                        <td>
                            <span className="text-danger">Gwendloyn Bouchard</span>
                        </td>
                        <td className="text-center">100%</td>
                        <td className="text-center">100%</td>
                        <td className="text-center">100%</td>
                        <td className="text-center">100%</td>
                    </tr>
                    <tr>
                        <td>
                            <span className="text-danger">Colin Becher</span>
                        </td>
                        <td className="text-center">0%</td>
                        <td className="text-center">0%</td>
                        <td className="text-center">0%</td>
                        <td className="text-center">0%</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
