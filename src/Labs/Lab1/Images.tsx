export default function Images() {
    return (
        <div id="wd-images">
            <h4>Image tag</h4>
            Loading an image from the internet:
            <br/>
            <img
                id="wd-413john"
                width="400px"
                src="https://www.homestuck.com/images/storyfiles/hs2/00001.gif"
            />
            <br/>
            Loading a local image:
            <br/>
            <img id="wd-413neil" src="images/neil.jpg" height="200px"/>
        </div>
    );
}
