import React from "react";
import PropTypes from "prop-types";

const SideBar = ({ open, logo, close, menuOptions, profileComponent }) => {
  if (!open) return;

  return (
    <div className="sidebar-drawer-mobile">
      <div className="sidebar-mobile-background" onClick={close} />
      <div className="sidebar-container">
        <div className="sidebar-body-head-container">
          <div className="sidebar-logo-container">
            <img src={logo} alt="App logo" />
          </div>
          <div className="sidebar-options-container">{menuOptions}</div>
        </div>
        <div className="sidebar-padding-profile">{profileComponent}</div>
      </div>
    </div>
  );
};

SideBar.propTypes = {
  open: PropTypes.func,
  close: PropTypes.func,
  logo: PropTypes.string,
  menuOptions: PropTypes.node,
  profileComponent: PropTypes.node,
};

SideBar.defaultProps = {
  open: true,
};

export default SideBar;
