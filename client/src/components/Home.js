import React, {useState} from "react";
import Slider from "@farbenmeer/react-spring-slider";
import "../css/home.css";
import Footer from "./Footer";
import aleem from "../images/aleem.png";

const Home = () => {


  return(
    <>
      <div className="main-slider-container">
        <Slider
          hasBullets={true}
        >
          <div>child 1</div>
          <img src={aleem} />
          <h2>test</h2>
        </Slider>
      </div>
    </>
  );
};

export default Home; 