import axios from "axios";
import authHeader from './auth-header';

const API_URL = process.env.REACT_APP_API_URL;

class UploadService {
  upload(formData) {
    return axios.post(
      API_URL + "/api/post/upload",
      formData,
      { headers: authHeader() },
    );
  }
}

export default new UploadService();

// This is based on AuthService by BezKoder (2019b).
