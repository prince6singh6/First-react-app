import React, { useState,useEffect } from "react";
//import { Button } from "react-bootstrap/lib/InputGroup";
import { Button } from "reactstrap";
import { toast, ToastContainer } from "react-toastify";
import Course from "./Course";
import base_url from "./../api/bootapi";
import axios from "axios";

const Allcourses=()=>{
      useEffect(() => {
        document.title = "All Courses";
   }, []);

   //function to call server:
   const getAllCoursesFromServer = () => {
    axios.get(`${base_url}/courses`).then(
        (response) => {
            //success
           // console.log(response);
            console.log(response.data);
            toast.success("courses has been loaded",{
                position: "bottom-center"
            }); 
            setCourses(response.data);
        },
        (error) =>  {
            //for error
            console.log(error);
            toast.success("something went wrong",{
                position: "bottom-center"
            });
        }
     );
    };

    //calling loading course function
    useEffect(() => {
        getAllCoursesFromServer();
    }, []);

    const [courses,setCourses] = useState([]);

    const updateCourses = (id) => {
         setCourses(courses.filter((c) => c.id != id));
    };

    return(
        <div>
          
          <h1>All Course</h1>
          <p>List of courses are as follows:</p>

         {
            courses.length > 0 
            ? courses.map((item) => <Course key={item.id} course={item} update={updateCourses} />)               
             : "No courses"}
         
       </div>
    );
};

export default Allcourses;