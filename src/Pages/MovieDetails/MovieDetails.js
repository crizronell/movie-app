import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [video, setVideo] = useState({});

  useEffect(() => {
    const getDetails = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=c039d861030e18663fdc38578f9027bd&language=en-US`
      );
      const response = await data.json();

      setDetails(response);
    };

    const getVideo = async () => {
      const data1 = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=c039d861030e18663fdc38578f9027bd&language=en-US&append_to_response=videos`
      );
      const response1 = await data1.json();
      console.log(response1.results[0]);
      setVideo(response1.results[0]);
    };
    getDetails();
    getVideo();
  }, [params.id]);

  return (
    <div className="container mx-auto mt-4">
      <div className=" w-full grid grid-cols-1 md:grid-cols-2 justify-items-center  ">
        <div>
          <img
            className="sm:max-w-xl sm:max-h-[60vh] mx-auto rounded-xl"
            src={"https://image.tmdb.org/t/p/original" + details.poster_path}
            alt={details.title}
          />
        </div>

        <div className="font-bold p-4 font-sans sm:text-xl text-white">
          <h1 className="text-4xl mt-1">{details.original_title}</h1>
          <p className="text-justify text-md mt-4">{details.overview}</p>
          <p className="mt-3">Release Date:{details.release_date}</p>
          <p>Ratings:{details.vote_average}</p>
          <p>Runtime:{details.runtime}</p>
        </div>
      </div>

      <div className="flex items-center justify-center mt-4">
        <iframe
          width="950"
          height="534"
          title="video"
          src={"https://www.youtube-nocookie.com/embed/" + video.key}
        ></iframe>
      </div>
    </div>
  );
}

export default MovieDetails;
