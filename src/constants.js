import axios from "axios";

export const url = "https://api.tvmaze.com/search/shows?q=all";
export const movies = await axios.get(url).then(({ data }) => data);
