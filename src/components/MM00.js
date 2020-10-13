import React from "react";
import "../css/styles.css";
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import mockUp0 from "../img/phone__mockup.png";
import mockUpContent from "../img/mockUp_00.jpeg";
import MM00text from "../img/MM00text.png";
import Fade from 'react-reveal/Fade';

// import MM01video from "../video/MM01video.mp4"

class MM00 extends React.Component {
  render() {
    return (
      
      <div className="MM00">
        <Fade top>
        <div className="MM00_1">
          <div className="MM00__text">
            <img className="MM00text" src={MM00text} />
          </div>
          <div className="buttons">
            <button className="down-app" onClick={this._appStoreChangeHandler}>
              <FaAppStoreIos />
              App Store
            </button>
            <button
              className="down-app"
              onClick={this._googleStoreChangeHandler}
            >
              <FaGooglePlay />
              Google Play
            </button>
          </div>
        </div>
        <div className="MM00_2">
          <img className="mockUp-00" src={mockUp0} />
          <img className="mockUpImage" src={mockUpContent} />
          {/* <video>
              {MM01video}
          </video> */}
        </div>
        </Fade>
      </div>
    );
  }

  _appStoreChangeHandler = () => {
    alert("AppStore로 이동중...");
  };

  _googleStoreChangeHandler = () => {
    alert("GoogleStore로 이동중...");
  };
}

export default MM00;
