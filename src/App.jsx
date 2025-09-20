import "./App.css";
import { useState } from "react";
import { BarLoader } from "react-spinners";
import { getImages } from "./contents/FetchImages.js";
import ImageGallery from "./contents/ImageGalery/ImageGallery.jsx";
import LoadMoreBtn from "./contents/LoadMore/LoadMoreBtn.jsx";
import SearchBar from "./contents/SearchBar/SearchBar.jsx";

function App() {
  
  const [search, setSearch] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  
  const handleSearch = async (query) => {
    setSearch(query);
    setLoading(true);
    setTimeout(async () => {
                 try {
                   const response = await getImages(query,
                                                    page);
                   console.log(response);
                   setImages((prevImages) =>
                                 [...prevImages,
                                  ...response.results]);
                   setTotalPage(response.total_pages);
                   setPage(page + 1);
                 } catch (error) {
                   console.log(error);
                 } finally {
                   setLoading(false);
                 }
               },
               2000);
    
  };
  
  const handleMore = () => {
    handleSearch(search);
  };
  console.log(totalPage);
  
  return (
      <>
        <SearchBar setSearch={handleSearch} />
        
        
        {search && images && <ImageGallery images={images} />}
        
        <div className={"loader"}>
          <BarLoader
              height={5}
              width={300}
              color={"#3F50B5"}
              loading={loading}
              speedMultiplier={1}
          />
        
        
        </div>
        {totalPage > 1 && <LoadMoreBtn handleMore={handleMore} />}
      </>
  );
}

export default App;
