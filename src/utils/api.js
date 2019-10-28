import axios from "axios"
// import { YOUTUBE_API_KEY } from "./keys"



export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResults: 5,
        key: "AIzaSyAOkk4NVDrbS_6WyXXrPv8vW3buyY2flJY"
    }
})