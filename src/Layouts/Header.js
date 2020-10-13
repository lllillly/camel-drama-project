import React from "react";
import mainLogo from "../img/mainLogo.png";

class Header extends React.Component {


  render() {
    return (
      <div className="Header">
        <div className="Header__01">
          <img className="mainLogo" src={mainLogo} />
        </div>
        <div className="Header__02">
          <span onClick={this._ScrollMM01} >드라마</span>
          <span onClick={this._ScrollBottom}>제휴 문의</span>
        </div>
      </div>
    );
  }

  
  _ScrollBottom = () => window.scrollTo(0,5500);
  _ScrollMM01 = () => window.scrollTo(0,970);

}

export default Header;
