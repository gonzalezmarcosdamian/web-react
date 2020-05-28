import React from "react";
//import { css } from "@emotion/core";
import { Card, Button, Container, Col, Row } from "react-bootstrap";

const Proyectos = () => {
  const proyectos = [
    {
      url: "http://www.rionegrolabvet.com",
      rutaImg: require("../../assets/img/proyectos/proyecto1.jpg"),
      nombre: "Laboratorio-Veterinario",
      tipo: "Sistema WEB",
    },
    {
      url: "http://google.com",
      rutaImg: require("../../assets/img/proyectos/proyecto1.jpg"),
      nombre: "Otro proyecto 1",
      tipo: "Sistema WEB 2",
    },
    {
      url: "http://google.com",
      rutaImg: require("../../assets/img/proyectos/proyecto1.jpg"),
      nombre: "Otro proyecto 2",
      tipo: "Sistema WEB 3",
    },
  ];

  return (
    <>
      <Container id='proyectos'>
        <Container className='text-center titulo'>
          <Row className='mx-auto'>
            <Col sm>
              <h1>Proyectos</h1>
            </Col>
          </Row>
          <Row className='mx-auto'>
            <Col sm>
              <h3 className='section-subheading text-muted'>
                Descripcion de proyectos
              </h3>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            {proyectos &&
              proyectos.map((proyecto) => (
                <Card
                  className='tarjeta col-xs-4 mx-auto'
                  style={{ width: "18rem" }}
                  key={proyecto.nombre}>
                  <Card.Img className='' variant='top' src={proyecto.rutaImg} />
                  <Card.Body>
                    <Card.Title>{proyecto.nombre}</Card.Title>
                    <Card.Text>{proyecto.tipo}</Card.Text>
                    <Button variant='primary'>
                      <a className='btn-primary' href={proyecto.url}>
                        Ir al Sitio
                      </a>
                    </Button>
                  </Card.Body>
                </Card>
              ))}
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Proyectos;
