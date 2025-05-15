import {index, route} from "@react-router/dev/routes";

export default [
  index("routes/home.jsx"),
  route("movies", "routes/movies.jsx"),
  route("movies/:id", "routes/movie.jsx"),
  route("series", "routes/series.jsx"),
  route("series/:id", "routes/serie.jsx"),
];
