import {Welcome} from "../welcome/welcome";
import {Link} from "react-router";

export function meta() {
  return [
    {title: "Movies app using react-router"},
    {name: "description", content: "Welcome to React Router!"},
  ];
}

export default function Home() {
  return (
    <main>
      <div className="cont">
        <h1>Home page</h1>
        <Link
          className="p-[10px] w-[100px] bg-green-500 mt-[30px]"
          to="/movies"
        >
          Movies
        </Link>
      </div>
    </main>
  );
}
