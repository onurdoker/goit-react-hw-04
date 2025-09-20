import styles from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ handleMore }) => {
  
  return (
      <div>
        <button
            className={styles.btn}
            onClick={handleMore}
        >Load More
        </button>
      </div>
  );
};

export default LoadMoreBtn;