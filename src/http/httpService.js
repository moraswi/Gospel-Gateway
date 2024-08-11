import axios from "axios";

// const apiKey = "bdK/XxbJ9ZwWMAF4gwKnIA9rpD8XE6Q4LxF2TjjfHuo=";

const httpService = axios.create({
  baseURL: "https://localhost:7141/api/",
  headers: {
    "Content-Type": "application/json",
    // ApiKey: apiKey,
  },
});

const token = localStorage.getItem("token");
if (token) {
  httpService.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export default httpService;
