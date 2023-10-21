import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "ac889292b89fef27c6b802fd8aea39f8";

const getTrendingVideos = () => axios.get(movieBaseUrl + "/trending/all/day?api_key=" + api_key);

export default {
    getTrendingVideos
};
