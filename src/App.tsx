import { useEffect, useState } from "react";

import { getPhotos } from "./service/unsplashApi";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import { ImageType } from "./types";

const App = () => {
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [images, setImages] = useState<ImageType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showLoadMore, setShowLoadMore] = useState<boolean>(false);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<ImageType | null>(null);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const results: ImageType[] = await getPhotos(query, page);
        if (results.length === 0) {
          setIsEmpty(true);
          setShowLoadMore(false);
        } else {
          setIsEmpty(false);
          setImages((prevImages) => [...prevImages, ...results]);
          setShowLoadMore(true);
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Something went wrong.");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query, page]);

  const handleSubmit = (newQuery: string) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
    setError(null);
    setShowLoadMore(false);
    setIsEmpty(false);
  };

  const openModal = (img: ImageType | null) => {
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
      {isLoading && <Loader />}
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
