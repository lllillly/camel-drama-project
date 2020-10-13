import React from "react";
import mockUp1 from "../img/phone__mockup.png";
import mockUpContent from "../img/mockUp_01.jpeg";
import MM01text from "../img/MM01text.png";
import Fade from 'react-reveal/Fade';

class MM01 extends React.Component {
  render() {
    return (
      <div className="MM01">
        <Fade left>
        <div className="MM01_1">
          <img className="mockUp1" src={mockUp1} />
          <img className="mockUpImage" src={mockUpContent} />
        </div>
        </Fade>
        <Fade right>
        <div className="MM01_2">
          <div className="MM01text">
            <img className="MM01text" src={MM01text} />
          </div>
        </div>
        </Fade>
      </div>
    );
  }
}

export default MM01;
