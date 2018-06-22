import React, { Component } from "react";
import Popup from "reactjs-popup";

import "./PopUp.css"

import Card from './Card';

class PopUp extends Component {
  render() {
    return (

        <div className="example-warper">
        <Card />
          <Popup
            trigger={<button className="button"> Right Top </button>}
            position="right top"
            on="hover"
          >
            <Card title="Right Top" />
          </Popup>

          <Popup
            trigger={<button className="button"> Bottom Center </button>}
            position="bottom center"
            on="hover"
          >
            <Card title="Bottom Center" />
          </Popup>

          <Popup
            trigger={<button className="button"> Left Top </button>}
            position="left top"
            on="hover"
          >
            <Card title="Left Top" />
          </Popup>

          <Popup
            trigger={<button className="button"> Right Center </button>}
            position="right center"
            on="hover"
          >
            <Card title="Right Center" />
          </Popup>
          <Popup
            trigger={<button className="button"> Top Center </button>}
            position="top center"
            on="hover"
          >
            <Card title="Top Center" />
          </Popup>
          <Popup
            trigger={<button className="button"> left Center </button>}
            position="left center"
            on="hover"
          >
            <Card title="Left Center" />
          </Popup>
          <Popup
            trigger={<button className="button"> Right Bottom </button>}
            position="right bottom"
            on="hover"
          >
            <Card title="Right bottom" />
          </Popup>

          <Popup
            trigger={<button className="button"> Top Center </button>}
            position="top center"
            on="hover"
          >
            <Card title="Top Center" />
          </Popup>

          <Popup
            trigger={<button className="button"> Left Bottom </button>}
            position="left bottom"
            on="hover"
          >
            <Card title="Left Bottom" />
          </Popup>
        </div>

    );
  }
}

export default PopUp;
