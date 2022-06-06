import React from "react";
import Home from "./Home/Home";
import MovieDetails from "./MovieDetails/MovieDetails";
import Searched from "./Searched/Searched";
import { Route, Routes } from "react-router-dom";

function Pages() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/details/:id" element={<MovieDetails />}></Route>
        <Route path="/searched/:name" element={<Searched />}></Route>
      </Routes>
    </>
  );
}

export default Pages;
