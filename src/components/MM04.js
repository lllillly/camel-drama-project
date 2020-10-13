import React from "react";
import "../css/styles.css";
import mockUp4 from "../img/phone__mockup.png";
import mockUpContent from "../img/mockUp_04.jpeg";
import MM04text from "../img/MM04text.png";
import Fade from 'react-reveal/Fade';

class MM04 extends React.Component {
  render() {
    return (
      <div className="MM04">
        <Fade left>
        <div className="MM04_1">
          <div className="MM04text">
            <img className="MM04text" src={MM04text} />
          </div>
        </div>
        </Fade>
        <Fade right>
        <div className="MM04_2">
          <img className="mockUp4" src={mockUp4} />
          <img className="mockUpImage" src={mockUpContent} />
        </div>
        </Fade>
      </div>
    );
  }
}

export default MM04;
