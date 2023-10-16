// call component BookItem to store 
import BookItem from "./bookItem"

function Books(props){
    // .map pulls out every element from the array(myBooks) from Read component
    return props.myBooks.map(
        // the event handler (book)=> represents an arrow function in JavaScript
        // commonly used when mapping over arrays to render a list of elements in a React component
        (book)=>{
         return <BookItem mybook={book} key={book.isbn}></BookItem>
        }
    );
}

export default Books;