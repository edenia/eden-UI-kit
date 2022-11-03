import React from "react";
import { Story } from "@storybook/react";

import { Fab, IFab } from "../components/Fab";

export default {
  title: "Fab",
  component: Fab,
};

const Template: Story<IFab> = (args) => <Fab {...args} />;

export const Extended = Template.bind({});
Extended.args = {
  children: (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img src="https://proxy.eden.eoscommunity.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flike-icon.9f31f141.png&w=32&q=75" />
      <span style={{ paddingLeft: "16px" }}>Extended fav</span>
    </div>
  ),
  extended: true,
  bgColor: "#f59e0b",
  color: "#000",
};

export const Notextended = Template.bind({});
Notextended.args = {
  children: (
    <img src="https://proxy.eden.eoscommunity.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flike-icon.9f31f141.png&w=32&q=75" />
  ),
  extended: false,
  bgColor: "#f59e0b",
  color: "#000",
};
