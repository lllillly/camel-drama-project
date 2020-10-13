import React from "react";
import MainSlider from "../MainSlider";
import MM05text from "../img/MM05text.png";
import Fade from 'react-reveal/Fade';

class MM05 extends React.Component {
  render() {
    return (
      
      <div className="MM05">
        <Fade top>
        <div className="MM05__mainTitle">
          <img className="MM05text" src={MM05text} />
        </div>
        <div className="MM05__MainSlider">
          <MainSlider></MainSlider>
        </div>
        </Fade>
      </div>
     
    );
  }
}

export default MM05;
