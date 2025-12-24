import api from "./axios";

export const fetchJobs = () => api.get("/jobs");
