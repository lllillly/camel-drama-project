import React from "react";
import "../css/styles.css";
import mockUp2 from "../img/phone__mockup.png";
import mockUpContent from "../img/mockUp_02.jpeg";
import MM02text from "../img/MM02text.png";
import Fade from 'react-reveal/Fade';

class MM02 extends React.Component {
  render() {
    return (
      <div className="MM02">
        <Fade left>
        <div className="MM02_1">
          <div className="MM02text">
            <img className="MM02text__txt" src={MM02text} />
          </div>
        </div>
          </Fade>
      <Fade right>
        <div className="MM02_2">
          <img className="mockUp2" src={mockUp2} />
          <img className="mockUpImage" src={mockUpContent} />
        </div>
      </Fade>

      </div>
    );
  }
}

export default MM02;
