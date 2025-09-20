import Modal from "react-modal";


const ImageModal = ({
                      image,
                      modalIsOpen,
                      closeModal,
                    }) => {
  
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      maxHeight: "90vh",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
  };
  
  Modal.setAppElement("#root");
  
  return (
      <div>
        <Modal
            modalIsOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc={true}
        >
          <img
              src={image.urls.raw}
              alt={image.alt_description}
              // style={{ width: "100%" }}
          />/
        </Modal>
      </div>
  );
  
};

export default ImageModal;