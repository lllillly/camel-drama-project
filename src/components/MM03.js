import React from "react";
import "../css/styles.css";
import mockUp3 from "../img/phone__mockup.png";
import mockUpContent from "../img/mockUp_03.jpeg";
import MM03text from "../img/MM03text.png";
import Fade from 'react-reveal/Fade';

class MM03 extends React.Component {
  render() {
    return (
      <div className="MM03">
        <Fade left>
        <div className="MM03_1">
          <img className="mockUp3" src={mockUp3} />
          <img className="mockUpImage" src={mockUpContent} />
        </div>
        </Fade>
        <Fade right>
        <div className="MM03_2">
          <div className="MM03text">
            <img className="MM03text" src={MM03text} />
          </div>
        </div>
        </Fade>
      </div>
    );
  }
}

export default MM03;
