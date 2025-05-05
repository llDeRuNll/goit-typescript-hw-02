import axios from "axios";
import { ImageType, UnsplashPhoto } from "../types";

const ACCESS_KEY = "CYM6llbSG81W6UbYKXlJMFqz2XC-7x1KmAVFbAUj9Ro";

const instance = axios.create({
  baseURL: "https://api.unsplash.com/",
  params: {
    client_id: ACCESS_KEY,
    orientation: "landscape",
    per_page: "9",
  },
});

export const getPhotos = async (
  query: string,
  page: number
): Promise<ImageType[]> => {
  const { data } = await instance.get<{ results: UnsplashPhoto[] }>(
    "search/photos",
    {
      params: { query, page },
    }
  );

  return data.results.map((image) => ({
    id: image.id,
    alt_description: image.alt_description,
    description: image.description,
    urls: {
      small: image.urls.small,
      regular: image.urls.regular,
    },
    likes: image.likes,
    userName: image.user.name,
    userLink: image.user.links.html,
  }));
};
