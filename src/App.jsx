import "./App.css";
import { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";
import { getImages } from "./contents/FetchImages.js";
import ImageGallery from "./contents/ImageGalery/ImageGallery.jsx";
import SearchBar from "./contents/SearchBar/SearchBar.jsx";

function App() {
  
  const [search, setSearch] = useState("");
  const [images, setImages] = useState();
  const [loading, setLoading] = useState(false);
  
  const handleSearch = async (query) => {
    setSearch(query);
    setLoading(true);
    setTimeout(async () => {
                 try {
                   const response = await getImages(query,
                                                    1);
                   console.log(response);
                   setImages(response.results);
                   setLoading(false);
                   
                 } catch (error) {
                   console.log(error);
                 }
               },
               3000);
    
  };
  
  return (
      <>
        <SearchBar setSearch={handleSearch} />
        <ul>
          {search && images && <ImageGallery images={images} />}
        </ul>
        
        <div className={"loader"}>
          <BarLoader
              height={5}
              width={300}
              color={"#3F50B5"}
              loading={loading}
              speedMultiplier={0.3}
          />
        
        </div>
      </>
  );
}

export default App;
