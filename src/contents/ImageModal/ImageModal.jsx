import Modal from "react-modal";

import styles from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({
                      image,
                      isOpen,
                      closeModal,
                    }) => {
  
  return (
      <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          className={styles.modal}
          overlayClassName={styles.overlay}
          contentLabel={"Enlarged Image"}
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}
          appElement={document.getElementById("root")}
      >
        <button
            onClick={closeModal}
            className={styles.closeBtn}
        >
          x
        </button>
        
        <img
            className={styles.image}
            src={image.urls.regular}
            alt={image.alt_description}
        />
      </Modal>
  );
  
};

export default ImageModal;