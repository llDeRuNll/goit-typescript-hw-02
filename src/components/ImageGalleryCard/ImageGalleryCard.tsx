interface ImageGalleryCardProps {
  imageData: {
    id: string,
    alt_description: string,
    description?: string,
    likes: number,
    urls: {
      small: string,
      regular: string,
    },
    user: {
      name: string,
      links: {
        html: string,
      },
    },
  };
  openModal: (img: {
    src: string,
    alt: string,
    description?: string,
    likes: number,
    userName: string,
    userLink: string,
  }) => void;
}

const ImageGalleryCard: React.FC<ImageGalleryCardProps> = ({
  imageData,
  openModal,
}) => {
  return (
    <li>
      <img
        src={imageData.urls.small}
        alt={imageData.alt_description}
        onClick={() =>
          openModal({
            src: imageData.urls.regular,
            alt: imageData.alt_description,
            description: imageData.description,
            likes: imageData.likes,
            userName: imageData.user.name,
            userLink: imageData.user.links.html,
          })
        }
      />
    </li>
  );
};

export default ImageGalleryCard;
