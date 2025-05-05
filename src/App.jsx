import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import { getPhotos } from "./service/unsplashApi";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const results = await getPhotos(query, page);
        if (results.length === 0) {
          setIsEmpty(true);
          setShowLoadMore(false);
        } else {
          setIsEmpty(false);
          setImages((prevImages) => [...prevImages, ...results]);
          setShowLoadMore(true);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query, page]);

  const handleSubmit = (query) => {
    setQuery(query);
    setPage(1);
    setImages([]);
    setError("");
    setShowLoadMore(false);
    setIsEmpty(false);
  };

  const openModal = (img) => {
    setModalImage(img);
  };

  const handleClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {isloading && <Loader />}
      {error && <ErrorMessage />}
      {showLoadMore && <LoadMoreBtn handleClick={handleClick} />}
      {isEmpty && <p>Please enter a valid search query</p>}

      <ImageModal
        image={modalImage}
        modalIsOpen={Boolean(modalImage)}
        closeModal={() => openModal(null)}
      />
    </div>
  );
};

export default App;
