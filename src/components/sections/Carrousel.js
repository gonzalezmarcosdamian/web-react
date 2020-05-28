import React from "react";
import { Carousel, Container, Row } from "react-bootstrap";

const Carrousel = () => {
  return (
    <>
      <section id='carrousel' className='page-section'>
        <Container>
          <div className='row'>
            <div className='col-lg-12 text-center'>
              <h2 className='text-uppercase'>Carrousel de imagenes</h2>
            </div>
          </div>
          <Row>
            <Carousel>
              <Carousel.Item>
                <img
                  className='d-block w-100 h-100 mx-auto fluid'
                  src='https://www.paragyte.com/img/React_Banner.png'
                  alt='First slide'
                />
                <Carousel.Caption>
                  {/* <h3>React JS</h3>
                  <p>Framework creado por Facebook.</p> */}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100 h-auto mx-auto fluid'
                  src='https://www.paragyte.com/img/React_Banner.png'
                  alt='Third slide'
                />

                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100 h-100 mx-auto '
                  src='https://www.paragyte.com/img/React_Banner.png'
                  alt='Third slide'
                />

                <Carousel.Caption>
                  {/*        <h3></h3>
                <p></p> */}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100 h-auto mx-auto fluid'
                  src='https://www.paragyte.com/img/React_Banner.png'
                  alt='Third slide'
                />

                <Carousel.Caption>
                  {/* <h3></h3>
                <p></p> */}
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Carrousel;
