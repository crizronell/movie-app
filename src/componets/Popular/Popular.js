import React, { useState, useEffect } from "react";

function Popular() {
  const [data, setData] = useState([]);

  const getMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=c039d861030e18663fdc38578f9027bd&language=en-US&page=1"
    );
    const response = await data.json();
    console.log(response.results);
  };

  useEffect(() => {
    getMovie();
  }, []);
  return <div>Popular</div>;
}

export default Popular;
