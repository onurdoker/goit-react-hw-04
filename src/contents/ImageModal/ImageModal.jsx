import Modal from "react-modal";

import styles from "./ImageModal.module.css";


const ImageModal = ({
                      image,
                      isOpen,
                      onClose,
                    }) => {
  
  
  Modal.setAppElement("#root");
  
  return (
      <div>
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            className={styles.modal}
            overlayClassName={styles.overlay}
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc={true}
        >
          <button
              onClick={onClose}
              className={styles.closeBtn}
          >
            x
          </button>
          
          <img
              className={styles.image}
              src={image.urls.regular}
              alt={image.alt_description}
          />/
        </Modal>
      </div>
  );
  
};

export default ImageModal;