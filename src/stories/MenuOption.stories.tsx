import React from "react";
import { Story } from "@storybook/react";

import { MenuOption, IMenuOption } from "../components/MenuOption";

export default {
  title: "MenuOption",
  component: MenuOption,
};

const icon = "https://proxy.eden.eoscommunity.org/icons/chiefdelegate-icon.png";

const Template: Story<IMenuOption> = (args) => <MenuOption {...args} />;

export const MenuOptionItem = Template.bind({});
MenuOptionItem.args = {
  icon,
  text: "Menu option",
  isSelected: true,
};
