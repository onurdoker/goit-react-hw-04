import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";
import ImageGallery from "./contents/ImageGalery/ImageGallery.jsx";
import SearchBar from "./contents/SearchBar/SearchBar.jsx";

function App() {
  
  const accessKey = "9csalAi_KlvP5jkXf-l5H6AABrR3GiX2FK7QvqD9kiA";
  const Set_URL = "https://api.unsplash.com/photos/?client_id=";
  const URL = Set_URL + accessKey;
  
  const [search, setSearch] = useState("");
  const [images, setImages] = useState();
  const [loading, setLoading] = useState(true);
  
  // useEffect(() => {
  //             async function fetchImages() {
  //               const response = await axios.get(URL);
  //               setImages(response.data);
  //             }
  //
  //             fetchImages();
  //           },
  //           []);
  
  return (
      <>
        <SearchBar setSearch={setSearch} />
        <ul>
          {search && images && <ImageGallery images={images} />}
        </ul>
        
        <div className={"loader"}>
          <BarLoader
              height={5}
              width={300}
              color={"#3F50B5"}
              loading={loading}
              speedMultiplier={0.1}
          />
        
        </div>
      </>
  );
}

export default App;
