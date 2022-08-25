import axios from "axios";

const KEY = "AIzaSyBVm6eiiH6bLacTgVRkbRBLztlJeQgYkX4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: "15",
    type: "video",
    key: KEY,
  },
});
