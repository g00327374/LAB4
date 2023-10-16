// import react plugins from bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// this component displays what should be shown from Read component
// props are used to pass data between React components
// they store data that can be accessed by the children of a React component
function BookItem(props){
    return(
        <div>
            {/* this is my card component */}
            <Card>
                {/* display the properties(title) from mybook in header*/}
                <Card.Header>{props.mybook.title}</Card.Header>
                <Card.Body>
                    {/* blockquote is used to change the font style */}
                    <blockquote className='blockquote mb-0'>
                        <img src={props.mybook.thumbnailUrl}></img>
                        {/* in the footer display the authors */}
                        <foot>
                            {/* indexed at 0 */}
                            {props.mybook.authors[0]}
                        </foot>
                    </blockquote>
                </Card.Body>
            </Card>
        </div>
    );
}

export default BookItem;