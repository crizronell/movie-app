import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Searched() {
  const [searched, setSearched] = useState([]);
  let params = useParams();

  useEffect(() => {
    const getMovie = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=c039d861030e18663fdc38578f9027bd&query=${params.name}&language=en-US&page-1`
      );
      const response = await data.json();
      console.log(response.results);
      setSearched(response.results);
    };
    getMovie();
  }, [params.name]);

  return (
    <div className="container mx-auto ">
      <div className=" place-content-center grid grid-cols-[repeat(auto-fill,_300px)]">
        {searched.map((item) => {
          return (
            <div key={item.id} className="mt-4 mx-auto">
              <Link to={"/details/" + item.id}>
                <img
                  className="mx-auto rounded-xl h-[35vh] "
                  src={"https://image.tmdb.org/t/p/original" + item.poster_path}
                  alt={item.title}
                />
              </Link>
              <div className="w-full">
                <p className="text-white text-center text-sm">{item.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Searched;
