import React, { useState, Fragment } from "react";

//import swal from "sweetalert";

const Contacto = () => {
  const [data, guardarData] = useState({
    nombre: "",
    email: "",
    phone: "",
    message: "",
  });

  // Extraer nombre de proyecto
  const { nombre, email, phone, message } = data;

  const onChangeCampo = (e) => {
    guardarData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    //validar
    if (nombre === "" || email === "" || phone === "" || message === "") {
      console.log("completa todos los campos");
      //swal("Error!", "Completa todos los campos!", "error");
      return;
    }

    //enviar mail
    /*  firebaseConf
      .database()
      .ref("form")
      .push(data)
      .then(() => {
        // Si todo es correcto, actualizamos nuestro estado para mostrar una alerta.
        console.log("Tu mensaje se envio");
        swal("Excelente!", "Tu mensaje se envio correctamente!", "success");
      })
      .catch(() => {
        // Si ha ocurrido un error, actualizamos nuestro estado para mostrar el error
        console.log("Tu mensaje no pudo ser enviado");
        swal("Error!", "Hubo un error en el servidor!", "error");
      }); */
    //alerta

    // Reiniciar el form
    guardarData({
      nombre: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <Fragment>
      <section className='page-section contacto' id='contact'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 text-center'>
              <h2 className='section-heading text-uppercase'>Contacto</h2>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <form id='form' name='form' onSubmit={onSubmitForm} noValidate>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        className='form-control'
                        name='nombre'
                        id='nombre'
                        type='text'
                        placeholder='Nombre *'
                        required='required'
                        data-validation-required-message='Por favor ingrese su nombre.'
                        value={nombre}
                        onChange={onChangeCampo}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                    <div className='form-group'>
                      <input
                        className='form-control'
                        name='email'
                        id='email'
                        type='email'
                        placeholder='Email *'
                        required='required'
                        data-validation-required-message='Por favor ingrese su email'
                        value={email}
                        onChange={onChangeCampo}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                    <div className='form-group'>
                      <input
                        className='form-control'
                        id='phone'
                        name='phone'
                        type='tel'
                        placeholder='Telefono *'
                        required='required'
                        data-validation-required-message='Por favor ingrese su telefono'
                        value={phone}
                        onChange={onChangeCampo}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <textarea
                        className='form-control'
                        id='message'
                        name='message'
                        placeholder='Mensaje *'
                        required='required'
                        value={message}
                        onChange={onChangeCampo}
                        data-validation-required-message='Please enter a message.'></textarea>
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='clearfix'></div>

                  <div className='col-lg-12 text-center'>
                    <div id='success'></div>
                    <button
                      type='submit'
                      class='btn btn-primary btn-lg '
                      data_but='btn-sm'>
                      <i class='fa fa-location-arrow'></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Contacto;
