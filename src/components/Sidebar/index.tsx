import React from "react";

export interface ISidebar {
  open: Boolean;
  close: Function;
  logo: string;
  menuOptions: React.ReactNode;
  profileComponent: React.ReactNode;
}

export const Sidebar: React.FC<ISidebar> = ({
  open = true,
  logo,
  close,
  menuOptions,
  profileComponent,
}) => {
  if (!open) return <></>;

  const divClickedHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    close();
  };

  return (
    <div className="sidebar-drawer-mobile">
      <div className="sidebar-mobile-background" onClick={divClickedHandler} />
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
