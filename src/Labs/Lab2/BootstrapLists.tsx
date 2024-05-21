export default function BootstrapLists() {
    return (
        <div id="wd-bootstrap-lists">
            <div id="wd-css-styling-lists">
                <h2>Favorite movies</h2>
                <ul className="list-group">
                    <li className="list-group-item active">Coraline</li>
                    <li className="list-group-item">Nausicaä of the Valley of the Wind</li>
                    <li className="list-group-item">Tenet</li>
                    <li className="list-group-item">The Grand Budapest Hotel</li>
                    <li className="list-group-item disabled">Silence of The Lambs</li>
                </ul>
            </div>
            <div id="wd-css-hyperlink-list">
                <h3>Favorite books</h3>
                <div className="list-group">
                    <a
                        href="https://en.wikipedia.org/wiki/House_of_Leaves"
                        className="list-group-item list-group-item-action active"
                    >
                        House of Leaves
                    </a>
                    <a
                        href="https://en.wikipedia.org/wiki/Homestuck"
                        className="list-group-item list-group-item-action"
                    >
                        The Homestuck Epilogues
                    </a>
                    <a
                        href="https://en.wikipedia.org/wiki/The_Stranger_(Camus_novel)"
                        className="list-group-item list-group-item-action"
                    >
                        The Stranger
                    </a>
                    <a
                        href="https://en.wikipedia.org/wiki/Roadside_Picnic"
                        className="list-group-item list-group-item-action"
                    >
                        Roadside Picnic
                    </a>
                    <a
                        href="https://en.wikipedia.org/wiki/Neverwhere_(novel)"
                        className="list-group-item list-group-item-action disabled"
                    >
                        Neverwhere
                    </a>
                </div>
            </div>
        </div>
    );
}
