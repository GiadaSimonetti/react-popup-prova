import React, { Component } from "react";
import Popup from "reactjs-popup";

import "./Menu"

class Menu extends Component {
  render() {
    return (
      <div className="menu">
    <div className="menu-item"> Menu item 1</div>
    <div className="menu-item"> Menu item 2</div>
    <div className="menu-item"> Menu item 3</div>
    <Popup
      trigger={<div className="menu-item"> sup Menu </div>}
      position="right top"
      on="click"
      closeOnDocumentClick
      mouseLeaveDelay={300}
      mouseEnterDelay={0}
      contentStyle={{ padding: "0px", border: "none" }}
      arrow={false}
    >
      <div className="menu">
        <div className="menu-item"> item 1</div>
        <div className="menu-item"> item 2</div>
        <div className="menu-item"> item 3</div>
      </div>
    </Popup>
    <div className="menu-item"> Menu item 4</div>
  </div>
    );
  }
}

export default Menu
