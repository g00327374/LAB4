// import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
// import local css
import './App.css';
// import header, content, and footer component to add contents 
// which will be displayed on localhost:3000
//import Header from './components/Header';
//import Footer from './components/Footer';
import Content from './components/Content';
import Read from './components/Read';
import Create from './components/Create';
// import container, nav, and navbar to use navbar function
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import browserrouter, routes, and route to use react functions
// this includes the <routes></routes> and <route path='/'></route>
import { BrowserRouter, Routes, Route } from 'react-router-dom';

{/* to make a comment in js file use ctrl k + ctrl c */}
function App() {
  return (
    // you need a browser router to store all of the other components
    <BrowserRouter>
      <div className="App">
        {/* start of navbar function */}
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              {/* the command /read and /create changes the name of the
              url by adding "/read" or /create at the end of "localhost:3000"
              it also calls the components that were assigned in route path*/}
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        
        {/* to call each component from the component folder 
        the route path=/'read' contains the content of the component Header.js because
        <Content></Content> is called inside the element tag*/}
        <Routes>
          <Route path='/' element={<Content></Content>}></Route>
          <Route path='/read' element={<Read></Read>}></Route>
          <Route path='/create' element={<Create></Create>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
