import React from "react";
import Common from "./Common";
import image from "../src/images/about.png";

const About = (props) => {
  return (
    <>
      <Common
        name="Wellcome To "
        imgsrc={image}
        visit="/contact"
        btnName="Contact Now"
      />
    </>
  );
};

export default About;
