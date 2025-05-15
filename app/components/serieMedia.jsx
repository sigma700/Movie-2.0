import {Link} from "react-router";

export default function SeriesMedia({name, rates, seriesPoster, release, id}) {
  return (
    <main>
      <div className="main-container">
        <div className="content mt-[20px]">
          <small className="text-[20px]">{name}</small>
          <img
            className="w-[400px] rounded-[10px] h-[300px] object-cover"
            src={`https://image.tmdb.org/t/p/w500/${seriesPoster}`}
            alt={`Poster of ${name}`}
          />
          <h2>Rating:{rates}</h2>
          <small>Date released:{release}</small> <br />
          <Link
            to={`/series/${id}`}
            className="p-[10px] w-[100px] bg-teal-500 rounded-[10px] mt-[20px]"
          >
            Details
          </Link>
        </div>
      </div>
    </main>
  );
}
