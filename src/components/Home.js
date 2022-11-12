import React, { useEffect } from "react"
//import { Jumbotron, Container, Button } from "reactstrap";
//import { Jumbotron, Container, Button } from "react-bootstrap";
import { Container, Button } from "reactstrap";

const Home  = () => {
    useEffect(()=>{
        document.title="Home || Learn code with React"
    },[])
    return (
        <div class="jumbotron">
 
                <h1 className="text-center">Learn Application through React</h1>
                <p className="text-center"> This is application deveoped through React and springBoot.</p>              
                <Container>
                    <Button color="warning">Start Application</Button>
            
                </Container>
   
        </div>

    );

}

export default Home;