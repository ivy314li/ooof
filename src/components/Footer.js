import React, { Component } from "react";

var style = {
    backgroundColor: "#F8F8F8",
    textAlign: "left",
    padding: "15px",
    position: "relative",
    left: "0",
    bottom: "0",
    height: "80px",
    width: "100%",
}

var phantom = {
  display: 'block',
  padding: '15px',
  height: '60px',
  width: '100%',
}

export class Footer extends Component {
    render() {

      return (
        <div>
            <div style={phantom} />
            <div style={style}>
              powered by&nbsp;
              <a href="https://contextualweb.io/">
               contextualweb.io
              </a>
               &nbsp;and&nbsp;
              <a href="https://machinebox.io/">
                machinebox
              </a>
                <br/> made with <a href="mailto:ivy.li@berkeley.edu">&#9829;</a> at 3am
            </div>
        </div>
      );
    }
}


export default Footer
