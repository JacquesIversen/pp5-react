import axios from "axios";

axios.defaults.baseURL = "https://pp5-api-final-b2f167f1cdb6.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;
