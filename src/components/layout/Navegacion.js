import React from "react";
import { Link } from "react-scroll";
import { Navbar, Nav } from "react-bootstrap";

const Navegacion = () => {
  return (
    <>
      <Navbar fixed='top' bg='dark' variant='dark' expand='lg'>
        <Link
          className='nav-link'
          activeClass='active'
          to='top'
          spy={true}
          smooth={true}
          offset={-70}
          duration={800}>
          <img
            width={64}
            height={64}
            className='align-self-start '
            src={require("../../assets/img/logos/react.svg")}
            alt='LOGO'
          />
        </Link>

        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto section-heading'>
            <Link
              className='nav-link navegacion-link'
              activeClass='active'
              to='nosotros'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              Nosotros
            </Link>

            <Link
              className='nav-link'
              activeClass='active'
              to='carrousel'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              Carrousel
            </Link>

            <Link
              className='nav-link'
              activeClass='active'
              to='proyectos'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              Proyectos
            </Link>

            <Link
              className='nav-link'
              activeClass='active'
              to='contact'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              Contacto
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navegacion;
