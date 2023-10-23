// allows to track state in a function component
// it returns an array with two values
// the current state and a function to update it
import { useState } from "react";

function Create(){

    // store title, cover, and author
    const [title, setTitle] = useState('');
    const [cover, setCover] = useState('');
    const [author, setAuthor] = useState('');
    // stop getting called multiple times
    // handslesubmit is a wrapper to manage
    // data inputs, validation, etc.
    // it is called when the form is submitted
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("Title: " + title +
        "Cover: " + cover +
        "Author: " + author);
    };

    return(
        <div>
            <h2>This is my Create Component</h2>
            {/* look to invoke */}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Add Book Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e)=>{setTitle(e.target.value)}}
                    />
                </div>

                <div className="form-group">
                    <label>Add Book Cover: </label>
                    <input type="text"
                        className="form-control"
                        value={cover}
                        onChange={(e)=>{setCover(e.target.value)}}
                    />
                </div>

                <div className="form-group">
                    <label>Add Book Author: </label>
                    <input type="text"
                        className="form-control"
                        value={author}
                        onChange={(e)=>{setAuthor(e.target.value)}}
                    />
                </div>

                <div>
                    <input
                        type="submit"
                        value="Create Book"
                    />
                </div>
            </form>
        </div>
    )
}

export default Create;