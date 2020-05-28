import React, { Fragment } from "react";
import Media from "react-bootstrap/Media";

const Nosotros = () => {
  return (
    <Fragment>
      <section className='page-section' id='nosotros'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 text-center'>
              <h2 className='section-heading text-uppercase'>Nosotros</h2>
              <h3 className='section-subheading text-muted'>Breve historia</h3>
            </div>
          </div>
        </div>
        <div className='container'>
          <Media>
            <img
              width={64}
              height={64}
              className='align-self-start mr-3'
              src={require("../../assets/img/logos/react.svg")}
              alt='Generic placeholder'
            />
            <Media.Body>
              <h5>The Fux Company</h5>
              <p>Somos un emprendimiento del sur Argentino.</p>

              <p>
                Donec sed odio dui. Nullam quis risus eget urna mollis ornare
                vel eu leo. Cum sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus.
              </p>
            </Media.Body>
          </Media>
        </div>
      </section>
    </Fragment>
  );
};

export default Nosotros;
