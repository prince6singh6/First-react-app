import axios from "axios";
import React from "react"
import { toast } from "react-toastify";
import { 
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Container, 
    Button,
 } from "reactstrap";
import base_url from "../api/bootapi";

 const Course=({ course, update })=>{

    const deleteCourse=(id) => {
     axios.delete(`${base_url}/courses/${id}`).then(
        (Response) => {
         toast.success("course deleted");
         update(id);
        },
        (error) => {
        toast.error("course is not Deleted !! Server is Down");
        }
     );

    };
    return (
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className="text-center">
                    <Button color="danger" onClick={()=> {
                     deleteCourse(course.id);
                    }}
                    >
                    Delete
                    </Button>
                    <Button color="warning ml-3">Update</Button>
                </Container>
            </CardBody>
        </Card>
    );
 }
 export default Course;
