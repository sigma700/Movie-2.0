import {useNavigate} from "react-router";

export async function loader({params}) {
  let id = params.id;
  let seriesRes = await fetch(
    ` https://api.themoviedb.org/3/tv/${id}`,

    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    }
  );
  let serie = await seriesRes.json();
  return serie;
}

export default function indivSerie({loaderData}) {
  console.log({serie: loaderData});

  const navigate = useNavigate();
  return (
    <main className="items-center p-[60px] ">
      <div className="nav flex flex-col gap-[0px] lg:flex-row lg:gap-[300px] mb-[30px] items-center">
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="p-[10px] bg-orange-400 w-[100px] h-fit rounded-[10px]"
        >
          Back
        </button>
        <h1 className="text-center text-[20px] mt-[20px] lg:text-[40px] lg:mb-[30px] text-teal-500">
          {loaderData.title}
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row cont gap-[30px] lg:gap-[30px]">
        <img
          className="rounded-[10px] w-[300px]"
          src={`https://image.tmdb.org/t/p/w500/${loaderData.poster_path}`}
          alt=""
        />
        <p className="font-light">{loaderData.overview}</p>
      </div>
    </main>
  );
}
