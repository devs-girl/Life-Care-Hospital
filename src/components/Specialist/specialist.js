import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';


const specialist = ({specialist}) => {
    // const {specialist} = props;
    const {name, specialists, img}= specialist;
    return (
        <div>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={img} height="400px"/>
                    <Card.Body>
                    <Card.Title> <h4>{name}</h4></Card.Title>
                    <Card.Text>
                    <p>{specialists}</p>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer className="bg-primary">
                    <small className="text-light">Learn More</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
      
    );
};

export default specialist;