// import Books component to pass or call data from it
import Books from "./Books";
import { useEffect, useState } from "react";
// handle all the format of the request
import axios from "axios";

// create my component Read
function Read(){
    // create my array called data
    const [data, setData] = useState([]);

    useEffect(()=>{
        axios.get('https://jsonblob.com/api/jsonblob/1161593332966481920')
        // write the method to handle the response that came back
        .then(
            (response)=>{
                // create an array called books
                setData(response.data.books);
            }
        )
        .catch(
            (error)=>{
                console.log(error);
            }
        );
    }, [])

    // create object Books
    return(
        <div>
            <h2>Hello from Read Component.</h2>

            {/* pass all the array elements from data into myBooks */}
            {/* must call the parent component Books first before instantiating the variable myBooks*/}
            <Books myBooks={data}></Books>
        </div>
    )
}

export default Read;