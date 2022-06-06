import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";
import "@splidejs/react-splide/css";

function Popular() {
  const [data, setData] = useState([]);

  const getMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=c039d861030e18663fdc38578f9027bd&language=en-US&page=1"
    );
    const response = await data.json();
    setData(response.results);
  };

  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className="container mx-auto p-4">
      <p className="text-3xl font-mono font-bold sm:text-2xl text-white">
        Popular
      </p>
      <Splide
        options={{
          start  : 0,
          gap: "1rem",
          perPage: 1,
          width: "100%",
          arrows: false,
          snap: true,
          autoplay:"play",
          interval: 3000,
          type: "loop",
        
        }}
      >
        {data.map((item) => {
          return (
            <SplideSlide  key={item.id}>
              <div className="mt-4">
                <Link to={"/details/" + item.id}>
                  <img
                    className="mx-auto rounded-xl "
                    src={"https://image.tmdb.org/t/p/w500" + item.poster_path}
                    alt={item.title}
                  />
                </Link>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
}

export default Popular;
