import toast, { Toaster } from "react-hot-toast";
import styles from "./SearchBar.module.css";

const SearchBar = ({ setSearch }) => {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    let searchKey = event.target.elements.search.value;
    
    if (searchKey === "") {
      toast.error(`This field cannot be left empty.
      Please enter the word you want to search for.`,
                  { duration: 3000 });
      console.log("empty");
    }
    
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
          <Toaster position={"top-center"} />
        </header>
      </div>
  );
};

export default SearchBar;