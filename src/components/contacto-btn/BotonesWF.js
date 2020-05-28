import React from "react";

const BotonesWF = () => {
  /*   const data = [{ nro: "542920445362", texto: "Gracias por contactar!" }];
   */
  return (
    <>
      <a
        href='https://api.whatsapp.com/send?phone=542920445362'
        className='whatsapp'>
        <i className='fa fa-whatsapp whatsapp-icon'></i>
      </a>
    </>
  );
};

export default BotonesWF;
