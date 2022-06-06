import React from "react"
import Header from "./componets/Header/Header";
import SearchBar from "./componets/SearchBar/SearchBar";
import Pages from "./Pages/Pages";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="bg-black">
    <Router>
      <Header />
      <SearchBar/>
      <Pages />
    </Router>
    </div>
  );
}

export default App;
