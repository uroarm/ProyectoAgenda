import React from 'react'
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap'; 

function ModalEvent() {
    return (
        <div>
            <Modal isOpen={editEvent}>
        <ModalHeader>
          <div>
            <h3>Editar País</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
           
            <label>Hour</label>
            <input
              className="form-control"
              type="text"
              name="nombre"
              value={selectedEvent && selectedEvent.hour}
              onChange={handleChange}
            />
            <br />

            <label>Title</label>
            <input
              className="form-control"
              type="text"
              name="minutos"
              value={selectedEvent && selectedEvent.title}
              onChange={handleChange}
            />
            <br />

            <label>Content</label>
            <input
              className="form-control"
              type="text"
              name="minutos"
              value={selectedEvent && selectedEvent.content}
              onChange={handleChange}
            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={()=>editar()}>
            Actualizar
          </button>
          <button
            className="btn btn-danger"
            onClick={()=>setModalEditar(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
        </div>
    )
}

export default ModalEvent;