const ImageGalleryCard = ({ imageData, openModal }) => {
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
