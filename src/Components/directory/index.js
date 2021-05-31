import React from "react";
import MenuItem from "../menu-item";
import "./directory.styles.scss";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selector";
import { connect } from "react-redux";

function Directory({ sections }) {
  return (
    <div className="directory-menu">
      {sections.map((item) => (
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

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps, null)(Directory);
