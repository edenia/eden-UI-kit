import React from "react";

export interface ISidebar {
  open: Boolean;
  close: Function;
  logo?: string;
  menuOptions?: React.ReactNode;
  profileComponent?: React.ReactNode;
  onClick?: Function;
}

export const Sidebar: React.FC<ISidebar> = ({
  open = true,
  logo,
  close,
  menuOptions,
  profileComponent,
  onClick
}) => {
  if (!open) return <></>;

  const divClickedHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    close();
  };

  const handleLogoRender = () => {
    if(onClick) onClick()
  };

  return (
    <div className="sidebar-drawer-mobile">
      <div className="sidebar-mobile-background" onClick={divClickedHandler} />
      <div className="sidebar-container">
        <div className="sidebar-body-head-container">
          <div className="sidebar-logo-container">
            <img className="heigth-image" src={logo} alt="App logo" onClick={handleLogoRender} />
          </div>
          <div className="sidebar-options-container">{menuOptions}</div>
        </div>
        <div className="sidebar-padding-profile">{profileComponent}</div>
      </div>
    </div>
  );
};
