import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
function Login() {
  return (
    <Container className="d-flex m-auto justify-content-center align-items-center" >
      <Card style={{ marginTop: "9rem", boxShadow:'3px 3px 5px 3px #696666a8'}}>
        <Card.Header className="text-center border-0 mt-3">
          <i
            class="fa fa-lock"
            aria-hidden="true"
            style={{ fontSize: "29px" }}
          ></i>
          <h5>Login</h5>
        </Card.Header>
        <Card.Body >
          <Form>
            <Form.Label>Email</Form.Label>
            <Form.Control
              style={{ border: "none", borderBottom: "1px solid #ced4da" }}
              type="email"
              placeholder="Enter Your Email"
            />
            <Form.Label>password</Form.Label>
            <Form.Control
              style={{ border: "none", borderBottom: "1px solid #ced4da" }}
              type="password"
              placeholder="Enter password"
            />
            <div className="text-center mt-4">
              <Button
                className="btn btn-primary mb-3"
                style={{ width: "100%" }}
                type="submit"
              >
                Log In
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Login;
