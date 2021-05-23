import React, { Component } from "react";
import MenuItem from "../menu-item";
import "./directory.styles.scss";
import SECTIONS_DATA from "../../assets/sections.data";
export default class Directory extends Component {
  constructor() {
    super();
    this.state = {
      sections: SECTIONS_DATA,
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map((item) => (
          <MenuItem
            key={item.id}
            imageUrl={item.webImageUrl}
            title={item.title}
            linkUrl={item.linkUrl}
          />
        ))}
      </div>
    );
  }
}
