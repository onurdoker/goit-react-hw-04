import styles from "./SearchBar.module.css";

const SearchBar = ({ setSearch }) => {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(event.target.elements.search.value);
  };
  
  return (
      <div className={styles.container}>
        <header>
          <form onSubmit={handleSubmit}>
            <input
                className={styles.input}
                name={"search"}
                type={"text"}
                autoComplete={"off"}
                autoFocus
                placeholder={"Search images and photos"}
            />
            <button>Search</button>
          </form>
        </header>
      </div>
  );
};

export default SearchBar;