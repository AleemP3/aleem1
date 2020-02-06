import React, {useState} from "react";
import Slider from "@farbenmeer/react-spring-slider";
import "../css/home.css";
import Footer from "./Footer";
import aleem from "../images/aleem.png";
import coding from "../images/coding.jpg";

const Home = () => {


  return(
    <>
      <div className="main-slider-container">
        <Slider
          hasArrows={true}
        >
          <div className="slide-one">
            {/* <img src={coding} className="coding-pic"/> */}
            <p>Hi, I'm Aleem Pathammavong and I like building cool web-apps</p>
          </div>
          <div className="slide-two"><img src={aleem} className="Aleem-pic"/></div>
          <h2>test</h2>
        </Slider>
      </div>
    </>
  );
};

export default Home; 