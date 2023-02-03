import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://reqres.in/",
  headers: {
    "content-type": "application/json",
  },
});

export { httpClient };
