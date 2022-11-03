import React from "react";
import { Story } from "@storybook/react";

import { Spinner } from "../components/Spinner";

export default {
  title: "Spinner",
  component: Spinner,
};

const Template: Story<{ size?: number }> = (args) => <Spinner {...args} />;

export const SpinnerItem = Template.bind({});
SpinnerItem.args = {
  size: 40,
};
