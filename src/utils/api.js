import axios from "axios"
// import { YOUTUBE_API_KEY } from "./keys"

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResults: 5,
        key: "AIzaSyDPbCAxVZ0QIAu9U8mW3wTlBu73RO86gzk"
    }
})