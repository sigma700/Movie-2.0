import {index, route} from "@react-router/dev/routes";

export default [
  index("routes/home.jsx"),
  route("movies", "routes/movies.jsx"),
  route("movies/:id", "routes/movie.jsx"),
];
