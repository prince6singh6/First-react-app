import logo from './logo.svg';
import './App.css'; 
import { Button, Container, Row, Col } from "reactstrap";
import { toast, ToastContainer } from "react-toastify";
import Home from "./components/Home";
import Course from './components/Course';
import Allcourses from "./components/Allcourses";
import AddCourse from './components/AddCourse';
import Header from './components/Header';
import Menus from './components/Menus';
import {
  BrowserRouter as Router, BrowserRouter,Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
    
   const buttonHandle = () => {
   // toast("This is first message");
   // toast.success("done");
   toast.success("success",{position: "bottom-center"});
   
   };

  return (
    <BrowserRouter>
    <div>
    <ToastContainer /> 
    {/* <Home/>
    <Allcourses></Allcourses>
    <AddCourse></AddCourse> */}
    <Container>
      <Header/>
      <Row>
        <Col md = {4}><Menus/></Col>
        <Col md ={8}>
          {/* <Home/> */}
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-course" element={<AddCourse />} />
            <Route path="/view-courses" element={<Allcourses />} />
          </Routes>
          
          </Col>
      </Row>
    </Container>

  </div>
  </BrowserRouter>
  ); 
}

export default App;
