import React from "react";
import PropTypes from "prop-types";

const SideBar = ({ logo, menuOptions, profileComponent }) => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-body-head-container">
        <div className="sidebar-logo-container">
          <img src={logo} alt="App logo" />
        </div>
        <div className="sidebar-options-container">{menuOptions}</div>
      </div>
      <div className="sidebar-padding-profile">{profileComponent}</div>
    </div>
  );
};

SideBar.propTypes = {
  logo: PropTypes.string,
  menuOptions: PropTypes.node,
  profileComponent: PropTypes.node,
};

export default SideBar;
