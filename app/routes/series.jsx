import SeriesMedia from "../components/serieMedia";

export async function loader() {
  let seriesRes = await fetch("https://api.themoviedb.org/3/tv/top_rated", {
    headers: {
      accept: "application/json",
      //getting api key form the .env file
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  });
  //getting it as json
  let series = await seriesRes.json();
  return series.results;
}
//ro render all the available data into our UI
export default function Series({loaderData}) {
  console.log({series: loaderData});
  return (
    <main className="p-[5px]">
      <h1 className="text-center text-[40px] bg-gradient-to-r from-slate-200 to-cyan-600 bg-clip-text text-transparent">
        Series
      </h1>
      <div className="container grid grid-cols-2 gap-[20px] p-[10px] lg:grid-cols-3 lg:gap-[20px]">
        {loaderData.map((item) => (
          <SeriesMedia
            key={item.id}
            seriesPoster={item.poster_path}
            name={item.name}
            rates={item.vote_average}
            release={item.first_air_date}
            id={item.id}
          />
        ))}
      </div>
    </main>
  );
}
