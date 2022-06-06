import React from "react";
import { Link } from "react-router-dom";
import { SiThemoviedatabase } from "react-icons/si";

function Header() {
  return (
    <>
      <nav
        className="flex  items-center box-border h-16 bg-white text-black shadow-md "
        role="navigation"
      >
        <div className="ml-[10rem]">
          <Link to="/">
            <SiThemoviedatabase className="text-5xl" />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
