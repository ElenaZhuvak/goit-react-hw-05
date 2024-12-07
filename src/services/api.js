import axios from "axios"


axios.defaults.baseURL = 'https://api.themoviedb.org/3'
axios.defaults.headers = {
    common: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDc3MjRiMTAwZDgzYmZlNTBlOTY4MzU0ZWFmYzI1MSIsIm5iZiI6MTczMjgzMzIzNS42MjMwMDAxLCJzdWIiOiI2NzQ4ZWZkMzAyODFhNjdiZWQ5ODNkYTUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.R2-qe-wCAeE_ogDPUsfQWKLyUqkTaxhdaIgvEb4N4N8'
    }
}

export const fetchTrendingMovies = async () => {
    const {data} = await axios.get('/trending/movie/week') 
    return data.results
}

export const fetchMoviesById = async (id) => {
    const {data} = await axios.get(`/movie/${id}`)
    return data
}

export const fetchMoviesByQuery = async (query) => {
    const {data} = await axios.get('/search/movie', {
        params: {
            query: query
        }
    })
    return data.results
}

export const fetchMovieImage = async (poster_path) => {
    const defaultImg = "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";
    
    if(!poster_path) return defaultImg;
    return `https://image.tmdb.org/t/p/w400${poster_path}`;
}

export const fetchMovieReviews = async (id) => {
    const {data} = await axios.get(`/movie/${id}/reviews`)
    return data.results
}

export const fetchMovieCast = async (id) => {
    const {data} = await axios.get(`/movie/${id}/credits`)
    return data.cast
}