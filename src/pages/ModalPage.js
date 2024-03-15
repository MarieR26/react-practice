import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button secondary onClick={handleClose}>
        Close Modal
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      This is the text that should be rendered in modal!
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Show Modal
      </Button>
      {showModal && modal}
    </div>
  );
};

export default ModalPage;
