function Content() {
    // this is what will return in the browser from component content.js
    return (
        <div>
            <h1>Hello World</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
}

export default Content;