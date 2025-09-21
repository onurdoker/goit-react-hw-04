import "./App.css";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BarLoader } from "react-spinners";
import { getImages } from "./contents/FetchImages.js";
import ImageGallery from "./contents/ImageGalery/ImageGallery.jsx";
import ImageModal from "./contents/ImageModal/ImageModal.jsx";
import LoadMoreBtn from "./contents/LoadMore/LoadMoreBtn.jsx";
import SearchBar from "./contents/SearchBar/SearchBar.jsx";

function App() {
  
  const [search, setSearch] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleSearch = async (query) => {
    setSearch(query);
    setLoading(true);
    setTimeout(async () => {
                 try {
                   const response = await getImages(query,
                                                    page);
                   setImages((prevImages) =>
                                 [...prevImages,
                                  ...response.results]);
                   setTotalPage(response.total_pages);
                   setPage(page + 1);
                 } catch (error) {
                   if (error.status === 400) {
                     toast.error(`This field cannot be left empty.
                     Please enter the word you want to search for.`);
                   } else if (error.status === 401) {
                     toast.error("You have exceeded the rate limit.");
                   } else if (error.status === 500) {
                     toast.error("Something went wrong, please try again later.");
                   }
                 } finally {
                   setLoading(false);
                 }
               },
               2000);
  };
  
  const handleMore = () => {
    handleSearch(search);
  };
  
  const handleModalOpen = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };
  
  const handleModalClose = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };
  
  useEffect(() => {
              if (isModalOpen) {
                document.body.classList.add("modal-open");
              } else {
                document.body.classList.remove("modal-open");
              }
            },
            [isModalOpen]);
  
  return (
      <>
        <SearchBar setSearch={handleSearch} />
        
        {search && images &&
         <ImageGallery
             images={images}
             openModel={handleModalOpen}
         />
        }
        
        {selectedImage &&
         <ImageModal
             image={selectedImage}
             isOpen={isModalOpen}
             closeModal={handleModalClose}
         />
        }
        
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
