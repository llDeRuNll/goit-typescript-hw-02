import { useEffect, useRef } from "react";
import ImageGalleryCard from "../ImageGalleryCard/ImageGalleryCard";
import s from "./ImageGallery.module.css";
import { ImageType } from "../../types";

interface ImageGalleryProps {
  images: ImageType[];
  openModal: (img: ImageType) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, openModal }) => {
  const galleryRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (!galleryRef.current) return;

    const lastItem = galleryRef.current.lastElementChild as HTMLElement | null;
    if (!lastItem || images.length <= 9) return;

    const scrollToLast = () => {
      lastItem.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const timeout = setTimeout(scrollToLast, 100);

    return () => clearTimeout(timeout);
  }, [images]);

  return (
    <ul className={s.imageGallery} ref={galleryRef}>
      {images.map((image) => (
        <ImageGalleryCard
          key={image.id}
          imageData={image}
          openModal={openModal}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
