import React from "react";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import MM00 from "./components/MM00";
import MM01 from "./components/MM01";
import MM02 from "./components/MM02";
import MM03 from "./components/MM03";
import MM04 from "./components/MM04";
import MM05 from "./components/MM05";
import MM06 from "./components/MM06";
import { Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        {/* Header */}
        <Route path="/" component={Header} />
        {/* Header End */}
        {/* Content */}
        <Route path="/" component={MM00} />
        <Route path="/" component={MM01} />
        <Route path="/" component={MM02} />
        <Route path="/" component={MM03} />
        <Route path="/" component={MM04} />
        <Route path="/" component={MM05} />
        <Route path="/" component={MM06} />

        {/* Content End */}
        {/* Footer */}
        <Route path="/" component={Footer} />
        {/* Footer End */}
      </div>
    );
  }
}

export default App;
