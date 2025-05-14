import {Link} from "react-router";
import MediaCard from "../components/mediacard";
export async function loader() {
  let moviesRes = await fetch("https://api.themoviedb.org/3/discover/movie", {
    headers: {
      accept: "application/json",
      //getting api key form the .env file
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  });
  let movies = await moviesRes.json();
  return movies.results;
}

export default function Movies({loaderData}) {
  console.log({movies: loaderData});

  return (
    <main>
      <div className="p-[40px]">
        <h1 className="text-[50px] text-teal-300 text-center ">Movies</h1>
        <div
          className="grid grid-cols-2 lg:grid-cols-3 gap-[30px]
        "
        >
          {loaderData.map((item) => (
            <MediaCard
              key={item.id}
              posterPath={item.poster_path}
              title={item.title}
              rating={item.vote_average}
              release={item.release_date}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
