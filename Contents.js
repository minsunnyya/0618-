import React from 'react'
import { Card, Button, Container,Row, Col} from 'react-bootstrap'



const Contents = () => {
  return (
    <Container>
  <Row>
    <Col>1 of 1</Col>
  </Row>
    <Card>
    
    <Card.Body>
    
      <Card.Title>Special title treatment</Card.Title>
     
      <Card.Text>
        With supporting text below as a natural lead-in to additional content.
      </Card.Text>
      <Button className="hashtag" variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  </Container>
  )
}

export default Contents