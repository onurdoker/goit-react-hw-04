import styles from "./ImageGallery.module.css";

const ImageGallery = ({
                        images,
                        openModel,
                      }) => {
  
  
  return (
      <>
        <ul className={styles.container}>
          {images.map((image) => (
              <li key={image.id}>
                <div>
                  <img
                      className={styles.image}
                      src={image.urls.raw}
                      alt={image.alt_description}
                      onClick={() => openModel(image)}
                  />
                </div>
              </li>
          ))}
        </ul>
      
      </>
  );
};

export default ImageGallery;