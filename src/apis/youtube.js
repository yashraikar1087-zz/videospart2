import axios from "axios";

const KEY = "AIzaSyDzh5mIKg2_th1beefy-eXoKguFe33oTig";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
