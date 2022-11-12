import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from 'react-router-dom';

const Menus=()=>{
    return(
      <ListGroup>
        <Link className="list-group-item list-group-item-action" 
        tag="a" 
        to="/" 
        action
        >
            Home
        </Link>
        <Link className="list-group-item list-group-item-action" 
        tag="a" 
        to="/add-course" 
        action
        >
            Add Course
        </Link>
        <Link className="list-group-item list-group-item-action" 
        tag="a" 
        to="view-courses" 
        action
        >
            view Courses
        </Link>
        <Link className="list-group-item list-group-item-action" 
        tag="a" 
        to="#!" 
        action
        >
          AboutUs
        </Link>
        <Link className="list-group-item list-group-item-action"
        tag="a" 
        to="#!" 
        action>
            contact
        </Link>
      </ListGroup>
    )
}
export default Menus;