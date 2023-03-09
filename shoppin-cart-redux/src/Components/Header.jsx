import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import InputGroup from "react-bootstrap/InputGroup";
import "./Header.css";
import Avatar from "react-avatar";

function Header() {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className="nav-card">
        <Navbar.Brand href="#home">shopping Cart</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Nav className="m-auto justify-content-center">
          <Form className="d-flex">
            <InputGroup>
              <Form.Control
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ width: "39rem", borderRadius: "30px" }}
              />
              <InputGroup.Text id="basic-addon2">
                <i class="fa fa-search" aria-hidden="true"></i>
              </InputGroup.Text>
            </InputGroup>
          </Form>
        </Nav>
        <Nav>
          <Nav.Link>
            <i
              class="fa fa-shopping-cart"
              aria-hidden="true"
              style={{ color: "white" }}
              onClick={() => navigate("/Cart")}
            ></i>
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link>
            <i
              class="fa fa-bell"
              aria-hidden="true"
              style={{ color: "white" }}
            ></i>
          </Nav.Link>
        </Nav>
        <Nav className="ml-auto mr-5">
          <Nav.Link>
            <p
              style={{
                color: "white",
                alignItems: "center",
                justifyContent: "center",
                margin: "auto",
                display: "flex",
              }}
            >
              Hello Kanya
            </p>
          </Nav.Link>
        </Nav>

        <Nav className="ml-auto">
          <Avatar
            className={"avatar"}
            name={"K"}
            // profilePicture={user?.profilePicture?.link}
            round={true}
            onClick={() => setToggle(!toggle)}
            size="35px"
          />
          {toggle && (
            <ul className="profile-menu">
              <li>Hello, Kanya Landage</li>

              <li
                onClick={() => {
                  navigate("/my-profile");
                  setToggle(false);
                }}
              >
                My Profile
              </li>

              <li
                onClick={() => {
                  navigate("/my-profile");
                  setToggle(false);
                }}
              >
                Setting
              </li>

              <li href="#/logout">Logout</li>
            </ul>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
