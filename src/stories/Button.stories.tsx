import React from "react";
import { Story } from "@storybook/react";

import { Button, ButtonProps } from "../components/Button";

export default {
  title: "Button",
  component: Button,
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  label: "Primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  label: "Secondary",
  shape: "rounded",
};
