import axios from "axios";

const instance=axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDNjOTA2ODJkN2MwZDRkODhmM2MzODQ1MjEwMzgxYiIsInN1YiI6IjY0ZWM5NjlmYzNjODkxMDEwMDdlMjJhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ouhTzEvduV4TPtH-9kU5v3jyyozh7Q9EEGo8Dxdb8XA'
      }
})

export default instance;