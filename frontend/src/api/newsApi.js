import api from "./axios";

export const fetchNews = async () => {
  return api.get("/news");
};
