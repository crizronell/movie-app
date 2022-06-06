import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import {Link} from "react-router-dom";

function UpComming() {
  const [data, setData] = useState([]);
  const getUpComming = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=c039d861030e18663fdc38578f9027bd&language=en-US&page=1"
    );
    const response = await data.json();
    setData(response.results);
  };

  useEffect(() => {
    getUpComming();
  }, []);

  return (
    <div className="container mx-auto p-4 mt-4">
       <p className="text-3xl font-mono font-bold sm:text-2xl text-white">Upcomming</p>
      <Splide options={{
          gap: '1rem',
          perPage: 5,
          arrows: false,
          snap: true,
          pagination: false,
        breakpoints:{
            640:{
                perPage: 1,
            },
            768:{
                perPage: 2,
            },
            1024:{
                perPage: 3,
            },
            1280:{
                perPage: 4,
            }
        }
      }}>
        {data.map((item) => {
          return (
            <SplideSlide key={item.id}>
              <div className="mt-4">
                <Link to={"/details/" + item.id}>
                <img className="mx-auto rounded-xl  h-[35vh]"
                  src={"https://image.tmdb.org/t/p/w300/" + item.poster_path}
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

export default UpComming;
