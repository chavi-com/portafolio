import './modal.css';
import Aptitudes from '../aptitudes/aptitudes.js';
import foperfiles from './foperfiles.jpg'
// Modal.js
import React, { useState } from "react";
const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button className="open-modal-button" onClick={handleOpenModal}>
        Ver datos personales
      </button>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className={'contper'}  >
              <img src={foperfiles} className={"imgper"}></img>

            </div>
            <div></div>
            <h2>Edison Jair Chavarria Villa</h2>
            <p>27 años</p>
            <p>Medellin-colombia</p>
            <p>Desarrollador web </p>
            <p>Graduado en universidad privada Cesde</p>
            <p>Experiencia laboral en Comfama"transformacion servicios financieros"</p>
            <p>Contactame:   cell +57 3052102814, correo Edizonchavi@gmail.com </p>
            <Aptitudes></Aptitudes>
            <button className="close-modal-button" onClick={handleCloseModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;

