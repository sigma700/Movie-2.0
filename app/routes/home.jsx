import {Welcome} from "../welcome/welcome";
import {Link} from "react-router";

export function meta() {
  return [
    {title: "Movies app using react-router"},
    {name: "description", content: "Welcome to React Router!"},
  ];
}
const actors = [
  {
    image: "/assets/images/dwayne.jpeg",
    name: "Dwayne Johnson",
    nof: "26",
    topMovie: "Central Intelligence",
    id: 1,
  },
  {
    image: "/assets/images/scarlet.jpeg",
    name: "Scarlet Johasson",
    nof: "32",
    topMovie: "Avengers Endgame",
    id: 2,
  },
  {
    image: "/assets/images/Ryan Reynolds.jpeg",
    name: "Ryan Reynold",
    nof: "22",
    topMovie: "Deadpool",
    id: 3,
  },
  {
    image: "/assets/images/samuel.jpeg",
    name: "Samuel L Jackson",
    nof: "12",
    topMovie: "Captain Marvel",
    id: 4,
  },
  {
    image: "/assets/images/statham.jpeg",
    name: "Jason Statham",
    nof: "35",
    topMovie: "Hobbs and Shawn",
    id: 5,
  },
];

const movies = [
  {
    name: "Army of the dead",
    yor: "2010",
    image: "/assets/images/armyOfDead.jpeg",
    id: 1,
  },
  {
    name: "All american",
    yor: "2023",
    image: "/assets/images/03ccd1e6-a8ac-4721-a9b9-e6d05e9b0ffe.jpeg",
    id: 2,
  },
  {
    name: "Scorpion",
    yor: "2013",
    image: "/assets/images/Scorpion CBS.jpeg",
    id: 3,
  },
  {
    name: "OuterBanks",
    yor: "2020",
    image: "/assets/images/outerBanks.jpeg",
    id: 4,
  },
  {
    name: "Sonic the hedgehog",
    yor: "2023",
    image: "/assets/images/sonic.jpeg",
    id: 5,
  },
  {
    name: "The Girlfriend Experience",
    yor: "2012",
    image: "/assets/images/girlfriendEx.jpeg",
    id: 6,
  },
  {
    name: "Peaky Blinders",
    yor: "2010",
    image: "/assets/images/peakyBlinders.jpeg",
    id: 7,
  },
  {
    name: "Hotel Transylvania",
    yor: "2015",
    image: "/assets/images/hotelTrans.jpeg",
    id: 8,
  },
  {
    name: "Wild Robot",
    yor: "2024",
    image: "/assets/images/The Wild Robot (2024).jpeg",
    id: 9,
  },
  {
    name: "JHarold and Kumar",
    yor: "2020",
    image: "/assets/images/haroldndKumar.jpeg",
    id: 10,
  },
];

export default function Home() {
  return (
    <main>
      <div className="cont bg-gradient-to-br from-stone-900 to-cyan-900">
        <div className="img-container relative">
          <img
            className=""
            src="/assets/images/1381542-3840x2160-desktop-4k-movie-poster-wallpaper-photo.jpg"
            alt=""
          />
          <div className="nav-bar-area flex justify-between absolute top-[10px] w-full p-[10px]">
            <img
              className="w-[20px] lg:hidden"
              src="/assets/images/menu.svg"
              alt=""
            />
            <ul className="hidden  lg:flex lg:gap-[100px]">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="">Tv Shows</a>
              </li>
              <li>
                <Link to="/movies">Movies</Link>
              </li>
              <li>
                <a href="/series">Tv series</a>
              </li>
            </ul>
            <form className="relative h-fit" action="">
              <input
                className="bg-white text-black rounded-[10px] p-[5px]"
                type="text"
                placeholder="Search"
              />
              <img
                className="w-[20px] absolute top-1/2 -translate-y-1/2 right-[10px] lg:top-[15px]"
                src="/assets/images/search.svg"
                alt=""
              />
            </form>
          </div>
          <div className="player absolute top-1/4  lg:top-1/2 lg:-translate-y-1/2  lg:w-[600px] ml-[30px]">
            <h1 className="lg:text-[70px]">Black Panther</h1>
            <p className="text-[11px] lg:text-[15px]">
              A rather brave warrior of the wakanda risks it all for his clan
              and his people all doing this while protecting the secret of the{" "}
              wakanda who are well blesssed with abundant resources
            </p>
            <div className="controls flex items-center gap-[50px] lg:mt-[30px]">
              <div className="play bg-white w-fit flex p-[10px] text-black items-center gap-[10px] rounded-[10px] mt-[10px] lg:p-[20px]">
                <img
                  className="w-[20px] lg:w-[30px]"
                  src="/assets/images/play.svg"
                  alt=""
                />
                <small className="lg:text-[20px]">Play now</small>
              </div>
              <div className="like">
                <img
                  className="w-[20px] lg:w-[30px]"
                  src="/assets/images/heart (1).svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <h3 className=" hidden lg:text-center lg:text-[30px] lg:text-teal-500 lg:font-bold">
          Top Actors
        </h3>
        <div className="actors">
          <ul className="hidden lg:flex lg:justify-between lg:p-[20px]">
            {actors.map((item) => (
              <li className="flex flex-col items-center" key={item.id}>
                <img
                  className="w-[150px] rounded-[50%] h-[150px] object-cover"
                  src={item.image}
                  alt=""
                />
                <small className="font-extralight mt-[20px] text-[20px]">
                  {item.name}
                </small>{" "}
                <br />
                <small>Movies Acted :{item.nof}</small>,
                <p>Top Movie : {item.topMovie}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="movies-samples grid grid-cols-2 gap-[20px] p-[10px] mt-[20px] lg:grid-cols-4 lg:gap-[10px]">
          {movies.map((movie) => (
            <ul>
              <li
                className="active:scale-[1.06] active:transition-all duration-[0.2s] lg:hover:scale-[1.07] lg:hover:cursor-pointer lg:active:scale-[1]"
                key={movie.id}
              >
                <img
                  className="h-[300px] object-cover rounded-[10px] active:opacity-[0.6]"
                  src={movie.image}
                  alt=""
                />
                <h3 className="text-[20px] font-extralight">{movie.name}</h3>
                <small>{movie.yor}</small>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </main>
  );
}
