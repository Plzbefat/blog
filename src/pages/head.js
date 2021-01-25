import React from "react";
import { Link } from "react-router-dom";

const Head = () => {
  return (
    <header>
      <nav>
        <ul>
          <div>
            <Link to="/">Plzbenice</Link>
          </div>
          <div>
            <Link to="/blog">Blog</Link>
            <Link to="/demo">Demo</Link>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Head;
