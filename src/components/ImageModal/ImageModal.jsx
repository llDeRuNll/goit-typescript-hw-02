import Modal from "react-modal";
import styles from "./ImageModal.module.css";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
    border: "none",
    background: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    zIndex: 1000,
  },
};

const ModalImage = ({ image, modalIsOpen, closeModal }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Picture modal"
    >
      <div className={styles.modalContent}>
        <img src={image?.src} alt={image?.alt} className={styles.image} />
        <div className={styles.info}>
          {image?.description && (
            <p>
              <strong>Description:</strong> {image.description}
            </p>
          )}
          <p>
            <strong>Author:</strong>{" "}
            <a href={image?.userLink} target="_blank" rel="noopener noreferrer">
              {image?.userName}
            </a>
          </p>
          <p>
            <strong>Likes:</strong> {image?.likes}
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default ModalImage;
