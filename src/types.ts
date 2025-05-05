export interface ImageType {
  id: string;
  alt_description: string;
  description: string | null;
  urls: {
    small: string;
    regular: string;
  };
  likes: number;
  userName: string;
  userLink: string;
}

export interface ModalImageProps {
  image: ImageType | null;
  modalIsOpen: boolean;
  closeModal: () => void;
}

export interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export interface LoadMoreBtnProps {
  handleClick: () => void;
}

export interface ImageGalleryProps {
  images: ImageType[];
  openModal: (img: ImageType | null) => void;
}

export interface ImageGalleryCardProps {
  imageData: ImageType;
  openModal: (img: ImageType | null) => void;
}

export interface ErrorMessageProps {
  error: string | null;
}
export interface UnsplashPhoto {
  id: string;
  alt_description: string;
  description: string | null;
  urls: {
    small: string;
    regular: string;
  };
  likes: number;
  user: {
    name: string;
    links: {
      html: string;
    };
  };
}
