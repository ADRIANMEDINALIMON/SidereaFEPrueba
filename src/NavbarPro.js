import React from "react";
/* eslint-disable jsx-a11y/anchor-is-valid */
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavbarPro() {
  return (
    <header class="header">
      <Container>
          <Navbar.Brand href="index.html">
            <img
              alt=""
              src="https://i.ibb.co/b3sNdXn/Ilustraci-n-sin-t-tulo-1.png"
              width="200"
              height="135"
              className="d-inline-block align-center "
            />
            {/*<a className="navbar-brand text-white"></a>*/}

          </Navbar.Brand>
        </Container>
    </header>
  );
}

export default NavbarPro;