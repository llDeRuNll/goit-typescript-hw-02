import { ImageGalleryCardProps } from "../../types";

const ImageGalleryCard: React.FC<ImageGalleryCardProps> = ({
  imageData,
  openModal,
}) => {
  return (
    <li>
      <img
        src={imageData.urls.small}
        alt={imageData.alt_description}
        onClick={() => openModal(imageData)}
      />
    </li>
  );
};

export default ImageGalleryCard;
