import React from "react";
import { Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <div className='col-md-4'>
            <span className='copyright'>Copyright &copy; FUX 2020</span>
          </div>
          <div className='col-md-4'>
            <ul className='list-inline social-buttons'>
              <li className='list-inline-item'>
                <a href='#something'>
                  <i className='fa fa-instagram'></i>
                </a>
              </li>
              <li className='list-inline-item'>
                <a href='#something'>
                  <i className='fa fa-facebook'></i>
                </a>
              </li>
              <li className='list-inline-item'>
                <a href='#something'>
                  <i className='fa fa-linkedin'></i>
                </a>
              </li>
            </ul>
          </div>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
