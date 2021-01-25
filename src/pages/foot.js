import React from "react";
import { ReactComponent as Github } from "../static/github.svg";
import { ReactComponent as Email } from "../static/email.svg";

const Foot = () => {
  return (
    <div style={{ position: "fixed", bottom: 0, right: 0 }}>
      <footer style={{ float: "right" }}>
        <a href="https://github.com/Plzbenice">
          <Github />
        </a>
        <a href="mailto:mail@plzbenice.com">
          <Email />
        </a>
      </footer>
    </div>
  );
};

export default Foot;
