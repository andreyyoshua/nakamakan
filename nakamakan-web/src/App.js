import './App.css';
import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'

function App() {
  return (
    <Container className="p-1">
      <Row className="justify-content-end">
          <Button variant="link">For Restaurants </Button>
      </Row>
      <Row className="p-3">
        <Col xs="auto" className="m-0 p-0">
        <Button className="m-0">NAKAMAKAN</Button>
        </Col>
        <Col xs="auto" className="m-0 p-0">
          <Button variant="link" className="m-0">Jakarta </Button>
        </Col>
        <Col className="ml-2 mr-1 p-0">
          <Form.Group className="m-0 p-0" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Search restaurants, cuisines, etc" />
          </Form.Group>
        </Col>
        <Col xs="auto">
          <Button variant="link" className="m-0 p-1">Today</Button> for <Button variant="link" className="m-0 p-1">2 People</Button>
        </Col>
        <Col xs="auto" className="m-0 p-0">
          <Button variant="outline-primary" className="m-0">Log In</Button>
        </Col>
      </Row>

      <Row>
        <Col lg={9} xs={12}>
          <Image fluid src="https://37g8q83dpternslae3eh1f8t-wpengine.netdna-ssl.com/wp-content/uploads/2021/04/fegens-800x533.jpg"/>
        </Col>
        <Col>
          <b>Discover Restaurants to love in Jakarta.</b>
          <br/>
          Be the first to know with Resy’s insider guides, deep dives on old standbys, and vital intel on all the latest and greatest new openings.
          <br/>
          <a href="#">NAKAMAKAN Travel</a>
          <br/>
          <a href="#">The Hit List</a>
          <br/>
          <a href="#">The Classics</a>
          <br/>
          <a href="#">New on NAKAMAKAN</a>
          <br/>
          <a href="#">Chinatown Jakarta</a>
          <br/>
          <a href="#">Guides</a>
          <br/>
          <a href="#">Promotion</a>
          <br/>
          <a href="#">Read More</a>
        </Col>
      </Row>
      <br/>
      {
        [1, 2, 3].map(x => {
          return (<Row className="mt-2 mb-5">
            <Container>
              <Row className="justify-content-between">
                <Col xs="auto">
                  <h1>Book Tonight</h1>
                </Col>
                <Col xs="auto">
                  See More 
                </Col>
              </Row>
              <Row>
                {
                  [1,2,3,4,5].map(x => {
                    return (<Col>
                      <Card>
                        <Card.Img variant="top" src="https://37g8q83dpternslae3eh1f8t-wpengine.netdna-ssl.com/wp-content/uploads/2021/04/fegens-800x533.jpg" />
                        <Card.Body className="m-0 p-1">
                          <Card.Title>Cru Lounge Houston</Card.Title>
                          4.9
                          <br/>
                          $$
                          <Card.Text>
                            Jakarta Utara
                          </Card.Text>
                          <Button variant="primary" size="sm">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </Col>)
                  })
                }
              </Row>
            </Container>
          </Row>)
        })
      }
      <Row className="mt-5">
        <Container>
          <Row className="justify-content-center">
            <h1>The Best Restaurants are on NAKAMAKAN</h1>
            <Container className="mt-4">
              <Row>
                <Col xs={3}>
                  <Image fluid src="https://resy.com/images/dist/Starr-Restaurants-60271f3a8f.png"/>
                </Col>
                <Col xs={3}>
                  <Image fluid src="https://resy.com/images/dist/Monteverde-efdd4328d3.png"/>
                </Col>
                <Col xs={3}>
                  <Image fluid src="https://resy.com/images/dist/Hogsalt-207ec7a6f1.png"/>
                </Col>
                <Col xs={3}>
                  <Image fluid src="https://resy.com/images/dist/Kismet-ed8f42899c.png"/>
                </Col>
                <Col xs={3}>
                  <Image fluid src="https://resy.com/images/dist/Husk-2d80cc6468.png"/>
                </Col>
                <Col xs={3}>
                  <Image fluid src="https://resy.com/images/dist/Carbone-336bab77f0.png"/>
                </Col>
                <Col xs={3}>
                  <Image fluid src="https://resy.com/images/dist/Momofuku-7ddcc871ef.png"/>
                </Col>
                <Col xs={3}>
                  <Image fluid src="https://resy.com/images/dist/Frontera-a7f9c6be21.png"/>
                </Col>
              </Row>
            </Container>
          </Row>
          <Row className="justify-content-center">
            NAKAMAKAN offers cutting edge software, fair pricing and 24/7/365 customer service.
          </Row>
          <Row className="justify-content-center">
            <Button variant="link">Learn More ></Button>
          </Row>
        </Container>
      </Row>
      <Row className="pt-5 mt-5">
        <Col xs={4}>
          NAKAMAKAN
        </Col>
        <Col>
          <Row>
            <Col>
              <a href="#">About</a>
            </Col>
            <Col>
              <a href="#">Careers</a>
            </Col>
            <Col>
              <a href="#">Newsroom</a>
            </Col>
            <Col>
              <a href="#">iOS App</a>
            </Col>
            <Col>
              <a href="#">Android App</a>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="pt-3 pb-5 mb-5">
        <Col xs={4}>
          NAKAMAKAN powers the world's best restaurants, using technology to imagine the future of hospitality.
          <br/>

        </Col>
        <Col className="footer">
          <Row>
            <Col>
              <Row>
                <Col xs={12}>Discover & Book </Col>
                <Col xs={6}><b>Nearby Restaurants</b> </Col>
                <Col xs={6}><b>Climbing</b> </Col>
                <Col xs={6}><b>Top Rated</b> </Col>
                <Col xs={6}><b>New on NAKAMAKAN</b> </Col>
                <Col xs={6}><b>Events</b> </Col>
                <Col xs={6}><b>Stories</b> </Col>
                <Col xs={6}><b>Guides</b> </Col>
                <Col xs={6}><b>The hit list</b> </Col>
                <Col xs={6}><b>Exclusive offers from AMEX</b> </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col xs={12}>For Restaurants </Col>
                <Col xs={6}><b>NAKAMAKAN OS Overview</b> </Col>
                <Col xs={6}><b>Features</b> </Col>
                <Col xs={6}><b>Plans & Pricing</b> </Col>
                <Col xs={6}><b>Why NAKAMAKAN OS</b> </Col>
                <Col xs={6}><b>Request a demo</b> </Col>
                <Col xs={6}><b>NAKAMAKAN OS Blog</b> </Col>
                <Col xs={6}><b>NAKAMAKAN Help Desk</b> </Col>
                <Col xs={6}><b>NAKAMAKAN OS Dashboard</b> </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
