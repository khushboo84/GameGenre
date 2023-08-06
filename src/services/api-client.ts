import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0e64fad6c37f481ebc836f47113150a8",
  },
});
