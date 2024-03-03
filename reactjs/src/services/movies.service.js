import axios from "axios";
import authHeader from "./auth-header";

const API_BASE =
  process.env.NODE_ENV === "development"
    ? `http://localhost:3001/api/v1`
    : process.env.REACT_APP_BASE_URL;

const API_URL = "/movies";

const getAllPrivateMovies = () => {
  return axios.get(`${API_BASE}${API_URL}`, { headers: authHeader() });
};

const moviesService = {
  getAllPrivateMovies,
};

export default moviesService;
