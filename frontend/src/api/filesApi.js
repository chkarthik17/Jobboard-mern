import api from "./axios";

export const fetchFiles = () => api.get("/files");
