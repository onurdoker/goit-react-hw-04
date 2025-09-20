import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import ImageGallery from "./contents/ImageGalery/ImageGallery.jsx";
import SearchBar from "./contents/SearchBar/SearchBar.jsx";

function App() {
  
  const accessKey = "9csalAi_KlvP5jkXf-l5H6AABrR3GiX2FK7QvqD9kiA";
  const Set_URL = "https://api.unsplash.com/photos/?client_id=";
  const URL = Set_URL + accessKey;
  
  const [search, setSearch] = useState("");
  const [images, setImages] = useState();
  
  useEffect(() => {
              async function fetchImages() {
                const response = await axios.get(URL);
                // console.log(response.data);
                setImages(response.data);
              }
              
              fetchImages();
            },
            []);
  
  return (
      <>
        <SearchBar setSearch={setSearch} />
        <ul>
          {search && images && <ImageGallery images={images} />}
        </ul>
      </>
  );
}

export default App;

// import { useEffect, useState } from "react";
// import { BarLoader } from "react-spinners";

// import SearchBar from "./contents/SearchBar/SearchBar.jsx";
// import ImageGallery from "./contents/ImageGalery/ImageGallery.jsx";


// const accessKey = "9csalAi_KlvP5jkXf-l5H6AABrR3GiX2FK7QvqD9kiA";
// const Set_URL = "https://api.unsplash.com/photos/?client_id=";
// const URL = Set_URL + accessKey;
//
// function App() {
//
//   const [search, setSearch] = useState("");
//   const [images, setImages] = useState();
//   const [loading, setLoading] = useState(false);
//   const [isError, setIsError] = useState(null);
//
//   const fetchImage = async (search) => {
//     try {
//       setLoading(true);
//
//       const response = await axios.get(URL);
//       setImages(response.data);
//     } catch (error) {
//       setIsError(true);
//     } finally {
//       setLoading(false);
//     }
//   };
//
//
//   console.log(images);
//   console.log(search);
//
//   return (
// <>
//   <SearchBar setSearch={setSearch} />
//
//
//   {loading
//       ?
//       <BarLoader
//           height={10}
//           width={350}
//           color={"#3F50B5"}
//           loading={loading}
//           speedMultiplier={0.3}
//       />
//       :
//       <ImageGallery images={images} />
//   }
//
// </>
//   );
// }
//
// export default App;
