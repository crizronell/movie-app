import React from "react";
import Popular from "../../componets/Popular/Popular";
import TopRated from "../../componets/TopRated/TopRated";
import UpComming from "../../componets/UpComming/UpComming";
function Home() {
  return (
    <div>
      <Popular />
      <TopRated />
      <UpComming />
    </div>
  );
}

export default Home;
