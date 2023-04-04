import React from "react";
import logo from "../assets/icons/giphy.png";

const Footer = () => {
  return (
    <footer
      style={{
        textAlign: "center",
        fontWeight: "light",
        padding: "2rem",
      }}
    >
      <p style={{ paddingBottom: "10px" }}>
        © 2023 GifShare. All Rights Reserved.
      </p>
      <p style={{ paddingBottom: "10px" }}>
        <span>Data provided by </span>
        <a href="https://giphy.com/" target="_blank">
          <img
            src={logo}
            alt="theMealDb"
            height="20px"
            style={{ marginBottom: "-5px" }}
          />
        </a>
      </p>
      <p style={{ color: "#999999" }}>Developed by Melchor Bendanillo Callos</p>
    </footer>
  );
};

export default Footer;
