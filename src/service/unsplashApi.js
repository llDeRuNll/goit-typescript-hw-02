import axios from "axios";

const ACCESS_KEY = "CYM6llbSG81W6UbYKXlJMFqz2XC-7x1KmAVFbAUj9Ro";

const instance = axios.create({
  baseURL: "https://api.unsplash.com/",
  params: {
    client_id: ACCESS_KEY,
    orientation: "landscape",
    per_page: "9",
  },
});

export const getPhotos = async (query, page) => {
  const { data } = await instance.get(`search/photos`, {
    params: { query, page },
  });

  return data.results;
};
