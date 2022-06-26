import React from "react";
import "./AboutStyle.css";
import aboutImg from "../images/img-5.jpg";

const About = () => {
  return (
    <>
      <div className="about-container" id="about">
        {/* right */}
        <div className="right">
          <p className="text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
            nisi repellat eligendi? Obcaecati eum natus quis, ullam doloremque
            quibusdam reprehenderit, assumenda temporibus placeat facere omnis,
            error illum ut voluptas! Delectus.
          </p>
        </div>
        {/* left */}
        <div className="left">
          <img src={aboutImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default About;
