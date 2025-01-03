import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function Modalforshopview({IsShow,IssetShow,Fullscreen}) {

  return (
    <>
      <Modal show={IsShow} fullscreen={Fullscreen} onHide={() => IssetShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal body content</Modal.Body>
      </Modal>
    </>
  );
}

export default  Modalforshopview;