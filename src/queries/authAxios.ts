import axios from "axios";

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error) {
      alert(`Auth error: ${error.message}`);
    }
    return Promise.reject(error);
  }
);
