import {Link, NavLink} from "react-router";
// import {NavLink} from "react-router";
export default function MediaCard({posterPath, title, rating, release, id}) {
  return (
    <main>
      <div className="">
        <article>
          <small className="text-[20px] lg:text-[30px]">{title}</small>
          <img
            className="w-[400px] rounded-[10px]"
            src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
            alt={`Poster of ${title}`}
          />

          <h2 className="mt-[20px] text-orange-500 font-bold text-[15px]">
            Rating : {rating}
          </h2>
          <div className="flex flex-col gap-[10px]">
            <small>Date realeased : {release}</small>
            <Link
              className="bg-teal-600 p-[10px] w-[100px] rounded-[10px] font-light"
              to={`/movies/${id}`}
              prefetch="intent"
            >
              Details
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}
