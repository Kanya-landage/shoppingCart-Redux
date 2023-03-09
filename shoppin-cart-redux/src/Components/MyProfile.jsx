import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

function MyProfile() {
  return (
    <Container>
      <Card className="mt-4">
        <Card.Header style={{ textAlign: "start", fontWeight: 500 }}>
          My profile
        </Card.Header>
        <Card.Body>
          <Container className="p-5">
            <Row>
              <Col md={4} className="pb-2">
                <Card className="h-100">
                  <Card.Body>
                    <Row>
                      <Col md={3} className="p-0">
                        <i
                          class="fa fa-shopping-basket"
                          aria-hidden="true"
                          style={{ fontSize: "45px", marginTop: "10px" }}
                        ></i>
                      </Col>
                      <Col
                        md={9}
                        className="mt-2"
                        style={{ textAlign: "start" }}
                      >
                        <h5>Your Orders</h5>
                        <small className="mt-3 mb-0">
                          Track Return or Buy this again
                        </small>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={4} className="pb-2">
                <Card className="h-100">
                  <Card.Body>
                    <Row>
                      <Col md={3} className="p-0">
                        <i
                          class="fa fa-lock"
                          aria-hidden="true"
                          style={{ fontSize: "55px", marginTop: "10px" }}
                        ></i>
                      </Col>
                      <Col
                        md={9}
                        className="mt-2"
                        style={{ textAlign: "start" }}
                      >
                        <h5>Login & Security</h5>
                        <small className="mt-3 mb-0">
                          Edit Email Change name and password
                        </small>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={4} className="pb-2">
                <Card className="h-100">
                  <Card.Body>
                    <Row>
                      <Col md={3} className="p-0">
                        <i
                          class="fa fa-gift"
                          aria-hidden="true"
                          style={{ fontSize: "55px", marginTop: "10px" }}
                        ></i>
                      </Col>
                      <Col
                        md={9}
                        className="mt-2"
                        style={{ textAlign: "start" }}
                      >
                        <h5>Prime</h5>
                        <small className="mt-3 mb-0">
                          View Benefits and Payment Settings
                        </small>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={4} className="pb-2">
                <Card className="h-100">
                  <Card.Body>
                    <Row>
                      <Col md={3} className="p-0">
                        <i
                          class="fa fa-map-marker"
                          aria-hidden="true"
                          style={{ fontSize: "45px", marginTop: "10px" }}
                        ></i>
                      </Col>
                      <Col
                        md={9}
                        className="mt-2"
                        style={{ textAlign: "start" }}
                      >
                        <h5>Your Address</h5>
                        <small className="mt-3 mb-0">
                          Edit orders for gift and orders
                        </small>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={4} className="pb-2">
                <Card className="h-100">
                  <Card.Body>
                    <Row>
                      <Col md={3} className="p-0">
                        <i
                          class="fa fa-credit-card-alt"
                          aria-hidden="true"
                          style={{ fontSize: "45px", marginTop: "10px" }}
                        ></i>
                      </Col>
                      <Col
                        md={9}
                        className="mt-2"
                        style={{ textAlign: "start" }}
                      >
                        <h5>Payment Options</h5>
                        <small className="mt-3 mb-0">
                          Edit or add payment method
                        </small>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={4} className="pb-2">
                <Card className="h-100">
                  <Card.Body>
                    <Row>
                      <Col md={3} className="p-0">
                        <i
                          class="fa fa-headphones"
                          aria-hidden="true"
                          style={{ fontSize: "45px", marginTop: "10px" }}
                        ></i>
                      </Col>
                      <Col
                        md={9}
                        className="mt-2"
                        style={{ textAlign: "start" }}
                      >
                        <h5>Contact Us</h5>
                        <small className="mt-3 mb-0">
                          Contact us for any query
                        </small>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default MyProfile;
